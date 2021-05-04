import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from '../Loader';
import Section from '../Section';
import Title from '../Title';

const ArticleTitle = styled.span`
  font-size: ${({ theme }) => theme.font.larger};
  color: ${({ theme }) => theme.color.yellow};
`;

export default function Articles() {
  const CONTENT_URL = 'https://lfrigodesouza-proxy.herokuapp.com/blog/content';
  const EXCERPT_LENGTH = 400;
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(async () => {
    setErrorMessage();
    setLoading(true);
    await fetch(CONTENT_URL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.posts.slice(0, 5));
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage('Não foi possível carregar os artigos. Por favor, tente novamente.');
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Section>
        <Title>Artigos</Title>
        {!loading
          && articles.map((item) => (
            <div key={item.slug}>
              <ArticleTitle>{item.title}</ArticleTitle>
              <p>{new Date(item.date).toLocaleString()}</p>
              <p>
                {item.text.slice(0, EXCERPT_LENGTH)}
                ...
              </p>
              <p>
                <a href={item.permalink} target="_blank" rel="noreferrer">
                  Continuar lendo
                </a>
              </p>
            </div>
          ))}
        {loading && <Loader />}
        {errorMessage && <span>{errorMessage}</span>}
      </Section>
    </>
  );
}

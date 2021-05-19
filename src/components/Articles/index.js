/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { BiErrorCircle } from 'react-icons/bi';
import { Heading, Paragraph, Text } from '@dracula/dracula-ui';
import Loader from '../Loader';
import Section from '../Section';
import Button from '../Button';

const ArticlesList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArticleItem = styled.li`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.margin.large};
`;

const ArticleTitle = styled.div`
  font-size: ${({ theme }) => theme.font.larger};
  color: ${({ theme }) => theme.color.yellow};
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

const ArticleDate = styled.p`
  margin-top: ${({ theme }) => theme.margin.small};
  margin-bottom: 0px;
  color: ${({ theme }) => theme.color.accentText};
  font-size: ${({ theme }) => theme.font.small};
`;

const ArticleExcerpt = styled.p`
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.margin.small};
`;

const ArticleKeepReading = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.green};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & svg {
    margin: ${({ theme }) => theme.margin.small};
  }
`;

const ArticlesButton = styled(Button)`
  max-width: 300px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.red};
`;

const ErrorMessage = styled.p`
  margin: ${({ theme }) => theme.margin.small};
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

const ErrorIcon = styled(BiErrorCircle)`
  font-size: ${({ theme }) => theme.font.jumbo};
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
      <Section title="Artigos">
        {!loading && !errorMessage && (
          <ArticlesList>
            {articles.map((item) => (
              <ArticleItem key={item.slug}>
                <Text color="white" size="xs" lineHeight="xs">
                  {new Date(item.date).toLocaleString()}
                </Text>
                <Heading color="yellow" size="lg">
                  {item.title}
                </Heading>
                <Paragraph>
                  {item.text.slice(0, EXCERPT_LENGTH)}
                  {' ...'}
                </Paragraph>
                <ArticleKeepReading
                  href={`${item.permalink}?utm_medium=site&utm_source=site`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text as="span" color="green">
                    Continuar lendo
                  </Text>
                  <HiArrowNarrowRight />
                </ArticleKeepReading>
              </ArticleItem>
            ))}
            <ArticlesButton
              href="https://blog.lfrigodesouza.net?utm_medium=site&utm_source=site"
              target="_blank"
            >
              Veja mais
            </ArticlesButton>
          </ArticlesList>
        )}
        {loading && <Loader />}
        {errorMessage && (
          <ErrorWrapper>
            <ErrorIcon />
            <Text size="sm" color="red">
              {errorMessage}
            </Text>
            <ArticlesButton
              href="https://blog.lfrigodesouza.net?utm_medium=site&utm_source=site"
              target="_blank"
            >
              Veja direto no Blog
            </ArticlesButton>
          </ErrorWrapper>
        )}
      </Section>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiErrorCircle } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  Anchor, Heading, Paragraph, Text,
} from '@dracula/dracula-ui';
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

const ErrorIcon = styled(BiErrorCircle)`
  font-size: ${({ theme }) => theme.font.jumbo};
`;

const ReadMoreContainer = styled.div`
  display: inline-flex;
  flex-direction: center;
  justify-content: flex-start;
  cursor: pointer;
  & svg {
    margin: 0px ${({ theme }) => theme.margin.small};
  }
`;

const LoadMoreContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    margin: 0px ${({ theme }) => theme.margin.small};
  }
`;

export default function Articles() {
  const CONTENT_URL = 'https://lfrigodesouza-functions.azurewebsites.net/api/blog-latests-posts';
  const ARTICLE_LIMIT = 5;
  const EXCERPT_LENGTH = 400;
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [hideLoadMore, setHideLoadMore] = useState(false);

  async function getArticles() {
    setLoading(true);
    await fetch(`${CONTENT_URL}?page=${currentPage}$limit=${ARTICLE_LIMIT}`)
      .then((response) => response.json())
      .then((data) => {
        const newArticles = [...articles, ...data];
        setArticles(newArticles);
        const newCurrentPage = currentPage + 1;
        setCurrentPage(newCurrentPage);
        if (newCurrentPage * ARTICLE_LIMIT > newArticles.length) {
          setHideLoadMore(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage('Não foi possível carregar os artigos. Por favor, tente novamente.');
        setLoading(false);
      });
  }

  useEffect(async () => {
    setErrorMessage();
    getArticles();
  }, []);

  return (
    <>
      <Section title="Artigos">
        {!errorMessage && (
          <ArticlesList>
            {articles.map((item) => (
              <ArticleItem key={item.slug}>
                <Text color="white" size="xs" lineHeight="xs">
                  {new Date(item.date).toLocaleString()}
                </Text>
                <Heading>
                  <Anchor
                    isExternal
                    size="lg"
                    color="yellow"
                    hoverColor="orange"
                    href={`${item.permalink}?utm_medium=site&utm_source=site`}
                  >
                    {item.title}
                  </Anchor>
                </Heading>
                <Paragraph>
                  {item.text.slice(0, EXCERPT_LENGTH)}
                  {' ...'}
                </Paragraph>
                <Anchor
                  isExternal
                  color="green"
                  hoverColor="orange"
                  href={`${item.permalink}?utm_medium=site&utm_source=site`}
                >
                  <ReadMoreContainer>
                    Continuar lendo
                    <HiOutlineExternalLink />
                  </ReadMoreContainer>
                </Anchor>
              </ArticleItem>
            ))}
            {!loading && !hideLoadMore && (
              <Anchor
                onClick={getArticles}
                color="yellow"
                hoverColor="yellowPink"
                weight="semibold"
              >
                <LoadMoreContainer>
                  <RiArrowDownSLine />
                  Carregar Mais
                  <RiArrowDownSLine />
                </LoadMoreContainer>
              </Anchor>
            )}
            {hideLoadMore && <Text color="blackSecondary">Você chegou ao fim!</Text>}
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

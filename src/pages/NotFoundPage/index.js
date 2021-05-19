import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillWarning } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { Heading, Text } from '@dracula/dracula-ui';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ops = styled.div`
  font-size: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

const AlertIcon = styled(AiFillWarning)`
  color: ${({ theme }) => theme.color.red};
`;

const RedirectWrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin.large};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & a {
    margin-top: ${({ theme }) => theme.margin.large};
    padding: ${({ theme }) => theme.padding.small};
  }
  & div {
    margin-bottom: ${({ theme }) => theme.margin.large};
  }
`;

export default function NotFoundPage() {
  const [articleUrl, setArticleUrl] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const isArticleUrl = /\/\d{4}\/\d{2}\/\d{2}\/.*/gi.test(location.pathname);
    if (isArticleUrl) {
      setArticleUrl(true);
      window.location.href = `https://blog.lfrigodesouza.net${location.pathname}/${location.search}`;
    }
    setLoading(false);
  }, []);

  return (
    <Wrapper>
      {!loading && (
        <>
          <NavBar />
          <Content>
            <Ops>
              <Heading size="2xl">Oops</Heading>
              <AlertIcon />
            </Ops>
            <Text>404 - Página não encontrada</Text>
            {articleUrl && (
              <RedirectWrapper>
                <Divider />
                <Text as="span">
                  Se você está procurando por algum artigo, é possível que ele tenha sido movido
                  para este endereço:
                </Text>
                <Button
                  href={`https://blog.lfrigodesouza.net${location.pathname}/${location.search}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`https://blog.lfrigodesouza.net${location.pathname}`}
                </Button>
              </RedirectWrapper>
            )}
          </Content>
          <Footer fixed />
        </>
      )}
    </Wrapper>
  );
}

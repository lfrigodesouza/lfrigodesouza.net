import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillWarning } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Divider from '../../components/Divider';

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
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
  color: #ff5555;
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
  const location = useLocation();
  useEffect(() => {
    setArticleUrl(/\/\d{4}\/\d{2}\/\d{2}\/.*/gi.test(location.pathname));
  }, []);

  return (
    <>
      <NavBar />
      <Wrapper>
        <Ops>
          Oops
          <AlertIcon />
        </Ops>
        404 - Página não encontrada
        {articleUrl && (
          <RedirectWrapper>
            <Divider />
            <span>
              Se você está procurando por algum artigo, é possível que ele tenha sido movido para
              este endereço:
            </span>
            <Button
              href={`https://blog.lfrigodesouza.net${location.pathname}/${location.search}`}
              target="_blank"
              rel="noreferrer"
            >
              {`https://blog.lfrigodesouza.net${location.pathname}`}
            </Button>
          </RedirectWrapper>
        )}
      </Wrapper>
    </>
  );
}

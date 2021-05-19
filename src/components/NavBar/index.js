import React from 'react';
import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';
import {
  Avatar, Box, Heading, Text,
} from '@dracula/dracula-ui';
import { Link } from 'react-router-dom';

const ExternalButton = styled.a`
  background-color: var(--green);
  color: ${({ theme }) => theme.color.externalButtonText};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.margin.small};
    margin-bottom: ${({ theme }) => theme.margin.small};
  }
`;

const Bar = styled(Box)`
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px var(--whiteLight);
  width: 100%;
`;

const BarContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.maxContentWidth};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.padding.small};
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;
const BrandName = styled(Heading)`
  font-weight: bold;
  margin-left: ${({ theme }) => theme.margin.small};
  text-decoration: none;
  font-size: var(--font-4xl);
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 0px;
  }
`;

export default function NavBar() {
  return (
    <Bar as="nav">
      <BarContent>
        <Brand as={Link} to="/">
          <Avatar
            src="https://blog.lfrigodesouza.net/uploads/avatar.jpg"
            title="LFrigoDeSouza.NET"
            color="blackSecondary"
            borderVariant="large"
          />
          <BrandName color="cyanGreen">LFrigoDeSouza.NET</BrandName>
        </Brand>
        <ExternalButton
          className="drac-btn drac-btn-lg drac-bg-green"
          href="https://blog.lfrigodesouza.net?utm_medium=site&utm_source=site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text color="black" weight="semibold">
            Blog
          </Text>
          <HiOutlineExternalLink />
        </ExternalButton>
      </BarContent>
    </Bar>
  );
}

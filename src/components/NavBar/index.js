/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import {
  Avatar, Box, Button, Heading, Text,
} from '@dracula/dracula-ui';

class SocialMediaLink {
  constructor(icon, url, name) {
    this.icon = icon;
    this.name = name;
    this.url = url;
  }
}
const socialMediaList = [
  new SocialMediaLink(<FaTwitter />, 'https://twitter.com/lfrigodesouza', 'twitter'),
  new SocialMediaLink(<FaGithub />, 'https://github.com/lfrigodesouza', 'github'),
  new SocialMediaLink(<FaEnvelope />, 'mailto:contato@lfrigodesouza.net', 'email'),
];

const ExternalButton = styled.a`
  background-color: var(--green);
  color: ${({ theme }) => theme.color.externalButtonText};
  padding: ${({ theme }) => theme.padding.medium};
  font-size: ${({ theme }) => theme.font.large};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 70px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.margin.small};
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: ${({ theme }) => theme.font.regular};
    padding: ${({ theme }) => theme.padding.regular};
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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;
const BrandName = styled(Heading)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.jumbo};
  margin-left: ${({ theme }) => theme.margin.small};
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 0px;
  }
`;

const SocialMedias = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.larger};
  margin-left: ${({ theme }) => theme.margin.medium};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 0px;
    margin-top: ${({ theme }) => theme.margin.small};
  }
`;

const SocialMediaButton = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.margin.small};
  }
`;

export default function NavBar() {
  return (
    <Bar as="nav">
      <BarContent>
        <Brand>
          <Avatar
            src="https://blog.lfrigodesouza.net/uploads/avatar.jpg"
            title="LFrigoDeSouza.NET"
            color="blackSecondary"
            borderVariant="large"
          />
          <BrandName color="cyanGreen">LFrigoDeSouza.NET</BrandName>
          <SocialMedias>
            {socialMediaList.map((item) => (
              <SocialMediaButton href={item.url} target="_blank" rel="noreferrer" key={item.name}>
                {item.icon}
              </SocialMediaButton>
            ))}
          </SocialMedias>
        </Brand>
        <ExternalButton
          size="lg"
          as="a"
          href="https://blog.lfrigodesouza.net?utm_medium=site&utm_source=site"
          target="_blank"
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

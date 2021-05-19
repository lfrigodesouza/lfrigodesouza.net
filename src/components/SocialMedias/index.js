import { Heading } from '@dracula/dracula-ui';
import React from 'react';
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

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
const SocialMediasButtons = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.larger};
  margin-left: ${({ theme }) => theme.margin.medium};
  margin-top: ${({ theme }) => theme.margin.small};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left: 0px;
  }
`;

const SocialMediaButton = styled.a`
  color: var(--white);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-top: ${({ theme }) => theme.margin.small};
  }
  &:hover {
    color: var(--blackTernary);
  }
`;

export default function SocialMedias() {
  return (
    <>
      <Heading size="sm" color="yellowPink">
        Entre em contato pelas redes sociais!
      </Heading>
      <SocialMediasButtons>
        {socialMediaList.map((item) => (
          <SocialMediaButton href={item.url} target="_blank" rel="noreferrer" key={item.name}>
            {item.icon}
          </SocialMediaButton>
        ))}
      </SocialMediasButtons>
    </>
  );
}

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
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.jumbo};
  margin-top: ${({ theme }) => theme.margin.small};
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

const Title = styled(Heading)`
  text-align: center;
`;

export default function SocialMedias() {
  return (
    <>
      <Title size="sm" color="yellowPink">
        Não deixe de conferir os artigos que escrevi no meu blog e me acompanhe nas redes sociais
      </Title>
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

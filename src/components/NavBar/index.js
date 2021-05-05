import React from 'react';
import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
  background-color: ${({ theme }) => theme.color.externalButtonBackground};
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

const Bar = styled.nav`
  background: ${({ theme }) => theme.color.backgroundOpaque};
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.color.divider};
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Photo = styled.img`
  max-height: ${({ theme }) => theme.navBarHeight};
  border-radius: 100%;
  height: 100%;
  width: auto;
`;
const BrandName = styled(Link)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.jumbo};
  margin-left: ${({ theme }) => theme.margin.small};
  color: ${({ theme }) => theme.color.accentText};
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
    <Bar>
      <BarContent>
        <Brand>
          <Photo src="https://blog.lfrigodesouza.net/uploads/avatar.jpg" />
          <BrandName to="/">LFrigoDeSouza.NET</BrandName>
          <SocialMedias>
            {socialMediaList.map((item) => (
              <SocialMediaButton href={item.url} target="_blank" rel="noreferrer" key={item.name}>
                {item.icon}
              </SocialMediaButton>
            ))}
          </SocialMedias>
        </Brand>
        <ExternalButton
          href="https://blog.lfrigodesouza.net?utm_medium=site&utm_source=site"
          target="_blank"
        >
          Blog
          <HiOutlineExternalLink />
        </ExternalButton>
      </BarContent>
    </Bar>
  );
}

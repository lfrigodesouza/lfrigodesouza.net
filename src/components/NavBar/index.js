import React from 'react';
import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

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
`;

const Brand = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: ${({ theme }) => theme.color.accentText};
`;
const Photo = styled.img`
  max-height: ${({ theme }) => theme.navBarHeight};
  border-radius: 100%;
  height: 100%;
  width: auto;
`;
const BrandName = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.jumbo};
  margin-left: ${({ theme }) => theme.margin.small};
`;

const SocialMedias = styled.div`
  padding-left: ${({ theme }) => theme.padding.medium};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.larger};
`;

const SocialMediaButton = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  margin-left: ${({ theme }) => theme.margin.medium};
`;

export default function NavBar() {
  return (
    <Bar>
      <BarContent>
        <Brand>
          <Photo src="https://blog.lfrigodesouza.net/uploads/avatar.jpg" />
          <BrandName>LFrigoDeSouza.NET</BrandName>
          <SocialMedias>
            <SocialMediaButton
              href="https://twitter.com/lfrigodesouza"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </SocialMediaButton>
            <SocialMediaButton
              href="https://github.com/lfrigodesouza"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </SocialMediaButton>
            <SocialMediaButton
              href="mailto:contato@lfrigodesouza.net"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </SocialMediaButton>
          </SocialMedias>
        </Brand>
        <ExternalButton href="https://blog.lfrigodesouza.net" target="_blank">
          Blog
          <HiOutlineExternalLink />
        </ExternalButton>
      </BarContent>
    </Bar>
  );
}

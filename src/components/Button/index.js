import React from 'react';
import { string } from 'prop-types';
import { HiOutlineExternalLink } from 'react-icons/hi';
import styled from 'styled-components';

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
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  & svg {
    margin-left: ${({ theme }) => theme.margin.small};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.font.regular};
  }
`;

export default function Button({ children, href, target }) {
  return (
    <ExternalButton href={href} target={target}>
      <span>{children}</span>
      <HiOutlineExternalLink />
    </ExternalButton>
  );
}

Button.defaultProps = {
  children: '',
};

Button.propTypes = {
  children: string,
  href: string.isRequired,
  target: string.isRequired,
};

import React from 'react';
import { string } from 'prop-types';
import { HiOutlineExternalLink } from 'react-icons/hi';
import styled from 'styled-components';

const ExternalButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  & svg {
    margin-left: ${({ theme }) => theme.margin.small};
  }
`;

export default function Button({ children, href, target }) {
  return (
    <ExternalButton
      className="drac-btn drac-bg-yellow drac-btn-outline drac-text-yellow drac-m-sm"
      href={href}
      target={target}
    >
      {children}
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

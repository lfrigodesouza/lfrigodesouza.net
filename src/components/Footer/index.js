import { Text } from '@dracula/dracula-ui';
import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  background: ${({ theme }) => theme.color.backgroundOpaque};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.color.divider};
  bottom: 0;
  position: ${(props) => (props.fixed ? 'fixed' : 'unset')};
`;

export default function Footer({ fixed }) {
  return (
    <FooterBar fixed={fixed}>
      <Text as="p" color="purpleCyan">
        LFrigoDeSouza.NET | © 2020 – 2021
      </Text>
    </FooterBar>
  );
}

Footer.defaultProps = {
  fixed: false,
};

Footer.propTypes = {
  fixed: bool,
};

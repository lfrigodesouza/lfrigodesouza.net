import { Text } from '@dracula/dracula-ui';
import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
  background: ${({ theme }) => theme.color.backgroundOpaque};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.color.divider};
`;

export default function Footer() {
  return (
    <FooterBar>
      <Text as="p" color="purpleCyan">
        LFrigoDeSouza.NET | © 2020 – 2021
      </Text>
    </FooterBar>
  );
}

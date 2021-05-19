import React from 'react';
import { bool, node, string } from 'prop-types';
import styled from 'styled-components';
import { Heading } from '@dracula/dracula-ui';
import Divider from '../Divider';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

export default function Section({ children, showDivider, title }) {
  return (
    <SectionWrapper>
      {showDivider && <Divider />}
      {title && (
        <Heading color="purpleCyan" style={{ fontSize: 'var(--font-3xl)' }}>
          {title}
        </Heading>
      )}
      {children}
    </SectionWrapper>
  );
}

Section.defaultProps = {
  showDivider: true,
  title: '',
};
Section.propTypes = {
  children: node.isRequired,
  showDivider: bool,
  title: string,
};

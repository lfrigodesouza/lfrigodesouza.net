import { bool, node, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Divider from '../Divider';
import Title from '../Title';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.margin.medium};
`;

export default function Section({ children, title, showDivider }) {
  return (
    <SectionWrapper>
      {showDivider && <Divider />}
      {title && <Title>{title}</Title>}
      {children}
    </SectionWrapper>
  );
}

Section.defaultProps = {
  title: '',
  showDivider: true,
};
Section.propTypes = {
  children: node.isRequired,
  title: string,
  showDivider: bool,
};

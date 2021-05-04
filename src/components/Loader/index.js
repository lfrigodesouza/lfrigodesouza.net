import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/images/loader.svg';

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.darkerText};
  margin: ${({ theme }) => theme.margin.medium};
`;

const CustomIcon = styled(Icon)`
  fill: ${({ theme }) => theme.color.darkerText};
  margin-bottom: ${({ theme }) => theme.margin.small};
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <CustomIcon />
      Carregando...
    </LoaderWrapper>
  );
}

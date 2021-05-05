import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.margin.medium};
  color: ${({ theme }) => theme.color.accentText};
`;
export default Title;

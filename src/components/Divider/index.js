import styled from 'styled-components';

const Divider = styled.div`
  content: '';
  display: block;
  width: 75%;
  background: ${({ theme }) => theme.color.dividerGradient};
  height: 1px;
  margin: ${({ theme }) => theme.margin.medium} 0px;
`;

export default Divider;

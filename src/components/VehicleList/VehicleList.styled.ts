import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing(1)}px;
  height: 100%;
`;

export const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.spacing(1)}px;
`;

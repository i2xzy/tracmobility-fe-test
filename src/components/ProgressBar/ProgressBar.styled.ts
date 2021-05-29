import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 26px;
  border-radius: 2px;
`;

export const Value = styled.div`
  position: absolute;
  line-height: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface BarProps {
  valueInPercent: number;
  error?: boolean;
  warning?: boolean;
  success?: boolean;
}

export const Bar = styled.div<BarProps>`
  height: 100%;
  max-width: ${({ valueInPercent }) => valueInPercent}%;

  ${({ error, theme }) => error && `background: ${theme.palette.error.main};`}
  ${({ warning, theme }) =>
    warning && `background: ${theme.palette.warning.main};`}
  ${({ success, theme }) =>
    success && `background: ${theme.palette.success.main};`}
`;

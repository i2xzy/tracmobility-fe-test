import React from 'react';

import { Wrapper, Value, Bar } from './ProgressBar.styled';

interface Props {
  value: number;
}

const ProgressBar = (props: Props) => {
  const { value } = props;
  const valueInPercent = value * 100;

  return (
    <Wrapper>
      <Value>{`${valueInPercent.toLocaleString()} %`}</Value>
      <Bar
        valueInPercent={valueInPercent}
        error={valueInPercent < 30}
        warning={valueInPercent >= 30 && valueInPercent <= 70}
        success={valueInPercent > 70}
      />
    </Wrapper>
  );
};

export default ProgressBar;

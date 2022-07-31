import styled from '@emotion/styled';
import React from 'react';

interface TitleProps {
  children: string;
}
function Title({ children }: TitleProps) {
  return <StyledH1>{children}</StyledH1>;
}

export default Title;

const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 20px;
`;

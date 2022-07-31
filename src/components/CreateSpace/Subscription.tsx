import styled from '@emotion/styled';
import React from 'react';

interface SubscriptionProps {
  children: string;
}

function Subscription({ children }: SubscriptionProps) {
  return <StyledSub>{children}</StyledSub>;
}

export default Subscription;

const StyledSub = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  opacity: 0.75;
`;

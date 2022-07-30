import React from 'react';
import styled from '@emotion/styled';
import XIcon from '@src/assets/Icon/XIcon.svg';
import { useRouter } from 'next/router';

interface CreateSpaceNavProps {
  children: string;
  routingAddress: string;
}

function CreateSpaceNav({ children, routingAddress }: CreateSpaceNavProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(routingAddress);
  };
  return (
    <StyledHeader>
      <div></div>
      <div>{children}</div>
      <XIcon onClick={handleClick} />
    </StyledHeader>
  );
}

export default CreateSpaceNav;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 57.65px;
  padding: 30px 25px;
  & div {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
  }
  & svg {
    cursor: pointer;
  }
`;

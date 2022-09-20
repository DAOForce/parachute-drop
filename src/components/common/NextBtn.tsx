import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface NextBtnProps {
  isAbled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
  className?: string;
  [key: string]: any;
}

function NextBtn({
  isAbled = true,
  onClick,
  children = 'Next',
  className,
  ...props
}: NextBtnProps) {
  return (
    <>
      {isAbled ? (
        <StyledButton
          isAbled={isAbled}
          className={`btn btn-active btn-warning rounded-full ${className} font-semibold`}
          onClick={onClick}
          {...props}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton
          isAbled={isAbled}
          className={`btn btn-disabled btn-warning rounded-full ${className} font-semibold`}
          onClick={onClick}
          {...props}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
}

export default NextBtn;

const StyledButton = styled.button<{ isAbled: boolean }>`
  width: 172px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  text-transform: capitalize;
  background: #fcff70;

  ${({ isAbled }) =>
    isAbled
      ? css`
          color: #141416;
        `
      : css`
          color: #939fb6;
          background: #d5dbe4;
        `}
`;

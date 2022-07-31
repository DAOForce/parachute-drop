import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface NextBtnProps {
  isAbled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
}

function NextBtn({ isAbled = true, onClick, children = 'Next' }: NextBtnProps) {
  return (
    <>
      {isAbled ? (
        <StyledButton
          isAbled={isAbled}
          className="btn btn-active btn-warning rounded-full"
          onClick={onClick}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButton
          isAbled={isAbled}
          className="btn btn-disabled btn-warning rounded-full"
          onClick={onClick}
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

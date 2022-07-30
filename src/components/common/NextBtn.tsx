import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface NextBtnProps {
  isAbled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function NextBtn({ isAbled = true, onClick }: NextBtnProps) {
  return (
    <>
      {isAbled ? (
        <StyledButton
          isAbled={isAbled}
          className="btn btn-active btn-primary rounded-full"
          onClick={onClick}
        >
          Next
        </StyledButton>
      ) : (
        <StyledButton
          isAbled={isAbled}
          className="btn btn-disabled btn-primary rounded-full"
          onClick={onClick}
        >
          Next
        </StyledButton>
      )}
    </>
  );
}

export default NextBtn;

const StyledButton = styled.button<{ isAbled: boolean }>`
  width: 172px;
  font-family: 'Poppins';
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

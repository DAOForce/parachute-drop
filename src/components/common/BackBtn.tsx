import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface BackBtnProps {
  isAbled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: string;
}

function BackBtn({ isAbled = true, onClick, children = 'back' }: BackBtnProps) {
  return (
    <>
      {isAbled ? (
        <StyledButton isAbled={isAbled} className="btn btn-active rounded-full" onClick={onClick}>
          {children}
        </StyledButton>
      ) : (
        <StyledButton isAbled={isAbled} className="btn btn-disabled rounded-full" onClick={onClick}>
          {children}
        </StyledButton>
      )}
    </>
  );
}

export default BackBtn;

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
          color: #f3f4f8;
        `
      : css``}
`;

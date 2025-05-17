import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  gap: 11px;

  width: 198px;
  height: 136px;
  background: linear-gradient(0deg, #a7b2e6, #a7b2e6), #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const TextSection = styled.div``;

export const Text = styled.p<{ $color: 'gray' | 'black' }>`
  width: 105px;
  height: 27px;
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;

  ${({ $color }) =>
    $color === 'gray'
      ? css`
          color: #000000;
          opacity: 0.6;
        `
      : css`
          color: #000000;
          opacity: 1;
        `}
`;

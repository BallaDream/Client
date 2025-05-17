import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  gap: 6px;
  height: 287px;
`;

export const ImagePreview = styled.img`
  box-sizing: border-box;
  padding: 8px;
  gap: 10px;
  width: 354px;
  height: 287px;
  border: 1px solid #000000;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  gap: 6px;
  right: -166px;
  height: 100%;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #0f1f4b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  width: 156px;
  height: 51px;

  &:hover {
    background-color: #0d1b47;
  }
`;

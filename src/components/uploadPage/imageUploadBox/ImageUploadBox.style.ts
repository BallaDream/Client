import styled from 'styled-components';

export const Conatiner = styled.div`
  box-sizing: border-box;

  position: relative;
  width: 354px;
  height: 287px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d9d9d9;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const DottedContainer = styled.div`
  box-sizing: border-box;
  width: 338px;
  height: 271px;
  border: 1px dashed #000000;
  border-radius: 6px;
  display: flex;
  padding-top: 40px;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;

  height: 56px;
  background: #0f1f4b;
  border-radius: 8px;
  color: white;
`;

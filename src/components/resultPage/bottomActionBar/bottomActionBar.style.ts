import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  padding: 0 0 4em 0;
`;

export const CustomButton = styled.button<{ $direction: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 60px;
  background: #a7b2e6;
  
  border-radius: ${({ $direction }) => ($direction == 'left' ? '30px 4px 4px 30px;' : $direction == 'center' ? '4px;' : '4px 30px 30px 4px;')}

  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
`;

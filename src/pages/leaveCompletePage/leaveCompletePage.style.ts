import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a7b2e640;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  svg {
    width: 70px;
    height: 70px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;

  b {
    font-weight: 600;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 20px;
  background-color: #162a6c;
  color: #fff;
  padding: 10px 32px;
  border-radius: 8px;
  margin-bottom: 90px;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0f1e4d;
  }
`;

import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin: 40px auto 100px;
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
    margin: 32px auto 80px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 460px;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const TextBlock = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 46px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.p`
  line-height: 1.6;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.button`
  background-color: #0f1f4b;
  color: white;
  padding: 16px 28px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 17px;
  min-width: 240px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2a3a7a;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    font-size: 16px;
    padding: 14px 20px;
  }
`;

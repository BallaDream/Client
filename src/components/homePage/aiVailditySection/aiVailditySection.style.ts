import styled from 'styled-components';

export const Section = styled.section`
  background-color: #a7b2e640;
  padding: 80px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 48px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 960px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageBox = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #666;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  flex: 1;
`;

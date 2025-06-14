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
  align-items: flex-start;
  gap: 48px;
  max-width: 1080px;
  width: 100%;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 32px;
  }
`;

export const ImageBox = styled.div`
  flex-shrink: 0;
  width: 260px; // 공통 가로 기준
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Text = styled.p`
  flex: 1;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  word-break: keep-all;
  max-width: 600px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

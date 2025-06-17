import styled from 'styled-components';

export const Section = styled.section`
  background-color: #a7b2e640;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 120px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: stretch; /* 추가: Divider가 Block 높이 맞추도록 */
  max-width: 1200px;
  width: 100%;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const Divider = styled.div`
  width: 2px;
  background-color: #ffffff;
  opacity: 0.4;
  margin: 0 8px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  max-width: 560px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ImageBox = styled.div`
  flex-shrink: 0;
  width: 260px; // 공통 가로 기준
  height: auto;
  border-radius: 4px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const RotatedImageBox = styled(ImageBox)`
  img {
    width: 320px;
    height: 200px;
    transform: rotate(90deg);
    transform-origin: center center;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  text-align: left;
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

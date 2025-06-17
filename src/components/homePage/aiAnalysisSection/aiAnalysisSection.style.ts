import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
`;

export const TextGroup = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 60px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div<{ $center?: boolean; $wide?: boolean }>`
  width: ${({ $wide }) => ($wide ? '340px' : '300px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${({ $center }) =>
    $center &&
    `
    align-self: center;
  `}
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  height: 28px; /* 모든 제목을 같은 높이로 고정 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

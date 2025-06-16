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

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
`;

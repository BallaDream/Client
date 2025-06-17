import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;
  background-color: #ffffff;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StepBox = styled.div`
  flex: 0 0 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StepTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 4px;
`;

export const StepTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.4;
  text-align: left;
`;

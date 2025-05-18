import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px 0;
  background-color: #ffffff;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StepBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 320px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

export const StepTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 16px 0 8px;
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

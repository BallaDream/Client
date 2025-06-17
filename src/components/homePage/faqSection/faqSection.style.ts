import styled from 'styled-components';

export const Section = styled.section`
  padding: 4em 16px;
  background-color: #a7b2e640;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const List = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
`;

export const Question = styled.div`
  padding: 16px 20px;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const QuestionText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

export const Toggle = styled.span`
  font-size: 20px;
  color: #8c8c8c;
`;

export const SlideContainer = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.4s ease;
`;

export const Answer = styled.div`
  padding: 16px 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  background-color: #dfe3f4;
  border-top: 1px solid #ccc;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  strong {
    font-weight: bold;
  }
`;

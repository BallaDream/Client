import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;
export const ContentContainer = styled.div`
  display: flex;
`;

export const ChartContainer = styled.div`
  border: 2px solid #afb1b6;
  &:div {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  border-radius: 8px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

export const Bar = styled.div`
  display: flex;
  height: 38px;
  border-radius: 4px;
  overflow: hidden;
`;

export const Segment = styled.div<{ $color: string; $width: string; $isOpacity: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $color }) => $color};
  width: ${({ $width }) => $width};
  opacity: ${({ $isOpacity }) => ($isOpacity ? 1 : 0.7)};
  font-size: 18px;
  color: black;
  font-weight: 500;
`;

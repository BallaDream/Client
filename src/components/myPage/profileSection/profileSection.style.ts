import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Card = styled.section`
  border: 1px solid #1b2d75;
  border-radius: 4px;
  padding: 16px;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #8c8c8c;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 0 16px;
`;

export const InfoContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
`;

export const InfoBoxFooter = styled.div`
  border-top: 1px solid #8c8c8c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const InfoBoxFooterText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #8c8c8c;
`;

export const NameText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const EmailText = styled.div`
  color: gray;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  color: white;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 6px;
  font-weight: bold;
  font-size: 14px;
  background: #0f1f4b;
  border-radius: 12px;
  white-space: nowrap;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span:first-child {
    font-size: 24px;
    font-weight: bold;
  }
  span:last-child {
    font-size: 20px;
    font-weight: bold;
    color: #8c8c8c;
  }
`;

export const DateButton = styled.button`
  font-size: 12px;
  background: none;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  color: black;

  font-weight: 600;
  font-size: 12px;
`;

export const ChartAndLegend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  max-width: 1200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-columns: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const RadarChartBox = styled.div`
  flex: 1;
  min-height: 240px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LegendBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ColorBox = styled.div<{ $level: number }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ $level }) => ['#4CAF50', '#8BC34A', '#FFC107', '#FF5722', '#F44336'][$level]};
`;

export const EmptyText = styled.div`
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  padding: 16px;
`;

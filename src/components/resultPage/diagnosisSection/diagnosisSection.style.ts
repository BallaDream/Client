import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 4em 0 2em 0;
  gap: 2em;
`;

export const HeaderConatiner = styled.div`
  width: 100%;
`;

export const FaceStatusMapContainer = styled.div`
  min-width: 800px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;

  background-image: url('/img/facemap.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-self: center;
`;

export const Hotspot = styled.div<{ color?: string }>`
  position: absolute;
  cursor: pointer;
  background: ${({ color }) => color || 'rgba(241, 138, 138, 0.7)'};
  border-radius: 100px;
  transform: translateX(-50%);
`;

export const Tooltip = styled.div<{ $visible: boolean; $top: number; $left: number }>`
  position: fixed;
  pointer-events: none;
  background: #a7b2e6;
  padding: 12px 16px;
  gap: 5px;
  border-radius: 10px;
  border: none;

  color: black;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  transform: translateY(-59px) translateX(70px);
  display: flex;
  flex-direction: column;

  white-space: nowrap;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const TooltipList = styled.li`
  display: flex;
`;
export const TooltipTitle = styled.p`
  font-weight: 700;
  font-size: 22px;
`;
export const TooltipStatusLabel = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
export const TooltipStatusText = styled.p`
  font-size: 18px;
  font-weight: 600;
  opacity: 0.8;
`;

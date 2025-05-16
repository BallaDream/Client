import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 48px 0 0 0;
  gap: 56px;
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
`;

export const Tooltip = styled.div<{ visible: boolean; top: number; left: number }>`
  position: fixed;
  pointer-events: none;
  background: #b3baf3;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #888;
  font-size: 14px;
  color: #000;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translateY(-50%);
  white-space: nowrap;
  z-index: 999;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 1px;
    background: black;
  }
`;

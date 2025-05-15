import styled from 'styled-components';

export const Conatiner = styled.section`
  width: 100%;

  padding: 48px 0px 0px 0px;
  gap: 56px;
`;

export const HeaderConatiner = styled.div`
  width: 100%;
`;

export const FaceStatusMapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Hotspot = styled.div`
  position: absolute;
  cursor: pointer;
  background: rgba(255, 0, 0, 0.2);
`;

export const Tooltip = styled.div<{ visible: boolean; top: number; left: number }>`
  position: fixed;
  pointer-events: none;
  background: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 14px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  transform: translate(10px, -100%);
  white-space: nowrap;
  z-index: 999;
`;

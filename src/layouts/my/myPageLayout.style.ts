import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.main`
  display: flex;
  flex: 1;
`;

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
`;

export const OutletWrapper = styled.div`
  flex: 1;
  min-height: 100%;
`;

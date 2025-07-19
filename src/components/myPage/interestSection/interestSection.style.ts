import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fiLL, minmax(260px, 1fr));
  gap: 16px;
  width: 100%;
  min-width: 536px;
  max-height: calc(100vh - 260px);
  overflow-y: auto;
  padding-bottom: 10px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-height: calc(100vh - 198px);
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: minmax(390px, auto);
  gap: 16px;
  width: 100%;
  min-width: 536px;
  height: auto;
  overflow-y: auto;
  padding-bottom: 10px;
`;

export const EmptyText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;

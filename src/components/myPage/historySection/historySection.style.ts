// src/components/myPage/historySection/historySection.style.ts
import styled from 'styled-components';

interface IPageButtonProps {
  $active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SummaryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #a7b2e640;
  padding: 12px 16px;
  border-radius: 10px;

  p {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 4px;
  }

  span {
    font-size: 13px;
    color: #afb1b6;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SortSelect = styled.select`
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

export const PageButton = styled.button.attrs({
  type: 'button',
})<IPageButtonProps>`
  padding: 6px 12px;
  border: 1px solid #ccc;
  background-color: ${({ $active }) => ($active ? '#0f1f4b' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #0f1f4b;
    color: white;
  }
`;

export const EmptyMessage = styled.div`
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  padding: 16px;
`;

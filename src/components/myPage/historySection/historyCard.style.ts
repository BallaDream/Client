// src/components/myPage/historySection/historyCard.style.ts
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const Title = styled.div`
  font-size: 12px;
  color: #0f1f4b;
  margin: -2px 0 6px;
`;

export const StatusList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatusItem = styled.li`
  font-size: 14px;
  margin-bottom: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 4px;
`;

export const Level = styled.span<{ $level: string }>`
  margin-left: 8px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: white;

  background-color: ${({ $level }) => ($level === '예방' ? '#A4D4AE' : $level === '권고' ? '#F2C94C' : '#EB5757')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

export const DetailButton = styled.button`
  padding: 8px 15px;
  background-color: #0f1f4b;
  color: white;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 20px auto;
  padding: 32px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #afb1b6;
  margin-bottom: 24px;
`;

export const Box = styled.div`
  border: 1px solid #1b2d75;
  border-radius: 6px;
  padding: 24px;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
  margin-bottom: 24px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  background-color: #162a6c;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #afb1b6;
    cursor: not-allowed;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
`;

export const TextGroup = styled.div`
  margin-bottom: 28px;
`;

export const BoldText = styled.p`
  font-weight: 600;
  margin-bottom: 1px;
`;

export const Text = styled.p`
  margin-left: 12px;
  line-height: 1.5;
  font-size: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 8px;
    border: 1px solid #d2d2d2;
    font-size: 14px;
  }

  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
`;

export const WarningText = styled.p`
  font-size: 13px;
  color: #ff0000;
  font-weight: 500;
  margin-top: 4px;
`;

export const FinalText = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
  color: #ff0000;
`;

export const AgreementCheck = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #afb1b6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  background-color: #162a6c;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 6px;

  svg {
    width: 16px;
    height: 16px;
    min-width: 16px;
    position: relative;
    top: 2px;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  width: 320px;
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const ModalButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  background-color: #162a6c;
  color: white;

  &:first-child {
    background-color: #ccc;
    color: #333;
  }
`;

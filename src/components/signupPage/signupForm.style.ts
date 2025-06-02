import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  padding: 30px 16px 100px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 2px;
`;

export const InputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 36px;
  padding: 0 14px;
  background-color: #0f1f4b;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2a3a7a;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
  margin-left: 2px;
`;

export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 16px;
`;

export const TermBox = styled.div`
  max-height: 120px;
  overflow-y: auto;
  background-color: #f9f9f9;
  padding: 12px 16px;
  border: 1px solid #ccc;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
  border-radius: 6px;
  white-space: pre-wrap;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#0f1f4b')};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#1a2b6d')};
  }
`;

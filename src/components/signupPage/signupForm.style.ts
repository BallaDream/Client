import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  padding: 30px 16px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    border: 2px solid #6c78c2;
    outline: none;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 32px;
  padding: 0 12px;
  background-color: #0f1f4b;
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #2a3a7a;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;

  label {
    font-size: 16px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      width: 16px;
      height: 16px;
    }
  }
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
  margin-top: 20px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#1a2b6d')};
  }
`;

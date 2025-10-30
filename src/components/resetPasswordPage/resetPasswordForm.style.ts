import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 80px 16px 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Container = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px;
  margin-bottom: 8px;

  svg {
    width: 120px;
    height: auto;
  }
`;

export const Description = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 1.5;
  color: #333;

  b {
    font-weight: 700;
  }

  margin-bottom: 18px;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-left: 2px;
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
  background-color: #fff;
  color: #333;
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
    background-color: #2e4186;
  }

  &:disabled {
    background-color: #ccc;
    color: #fff;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff4d4f;
  margin-left: 4px;
`;

export const PasswordGuide = styled.p`
  font-size: 12px;
  margin-left: 4px;
  margin-bottom: -16px;
  margin-top: 28px;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#0f1f4b')};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 28px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#1a2b6d')};
  }
`;

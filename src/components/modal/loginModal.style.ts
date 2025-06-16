import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  width: 450px;
  background: white;
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  svg {
    width: 120px;
    height: auto;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 6px;
  border: 1px solid #afb1b6;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #6c78c2;
    box-shadow: 0 0 0 2px rgba(108, 120, 194, 0.3);
    outline: none;
  }
`;

export const ForgotPassword = styled.div`
  text-align: right;
  color: #8c8c8c;
  font-size: 13px;
  margin-bottom: 28px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #0f1f4b;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 16px;
  cursor: pointer;
  &:hover {
    background-color: #2a3a7a;
  }
`;

export const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 13px;
  color: #afb1b6;
  text-align: right;
  cursor: pointer;
`;

export const DividerWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

export const Line = styled.hr`
  flex: 1;
  height: 1px;
  background: #ccc;
  border: none;
`;

export const Or = styled.span`
  padding: 0 8px;
  color: #aaa;
  font-size: 12px;
`;

export const ErrorMessage = styled.div`
  font-size: 13px;
  color: #e74c3c;
  margin: 4px 0 10px 4px;
`;

export const SnsLabel = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const SnsDesc = styled.div`
  font-size: 13px;
  margin-bottom: 16px;
  color: #333;
`;

export const KakaoButton = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

import styled from 'styled-components';

import LoginIconSvg from '@/assets/icons/mypage_icon.svg?react';

export const Container = styled.header`
  width: 100%;
  height: 62px;
  background-color: #162a6c;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;
export const LogoWrapper = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const LoginIcon = styled(LoginIconSvg)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: block;
`;

export const Text = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: white;
`;

export const LogoutText = styled(Text)`
  cursor: pointer;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

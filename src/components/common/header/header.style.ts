import styled from 'styled-components';

import LoginIconSvg from '@/assets/icons/mypage_icon.svg?react';

export const Container = styled.header`
  width: 100%;
  height: 54px;
  background-color: #162a6c;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const LoginIcon = styled(LoginIconSvg)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  display: block;
`;

export const LogoutText = styled.span`
  color: #bbb;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

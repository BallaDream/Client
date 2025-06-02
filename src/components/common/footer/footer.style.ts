import styled from 'styled-components';

import LogoSvg from '@/assets/icons/logo_footer.svg?react';

export const Container = styled.footer`
  background-color: #162a6c;
  width: 100%;
  padding: 36px 16px;
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled(LogoSvg)`
  width: 140px;
`;

export const Info = styled.div`
  color: #ffffff;
  font-size: 12px;
  line-height: 1.6;

  strong {
    font-weight: bold;
    font-size: 14px;
  }
`;

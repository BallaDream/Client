import styled from 'styled-components';

import LogoSvg from '@/assets/icons/logo_footer.svg?react';

export const Container = styled.footer`
  background-color: #162a6c;
  width: 100%;
  padding: 40px 16px;
`;

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const Logo = styled(LogoSvg)`
  width: 140px;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContactTitle = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
`;

export const Email = styled.p`
  color: #c7d2fe;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

export const Copyright = styled.div`
  color: #94a3b8;
  font-size: 11px;
  margin-top: 4px;
  font-weight: 400;
`;

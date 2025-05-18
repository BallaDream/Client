import styled from 'styled-components';
import LogoIconSvg from '@/assets/icons/logo.svg?react';

export const Container = styled.section`
  background-color: #a7b2e640;
  width: 100%;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const LogoIcon = styled(LogoIconSvg)`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 600px;
`;

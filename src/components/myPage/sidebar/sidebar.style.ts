import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  max-width: 346px;
  min-width: 240px;
  height: 100%;
  background: linear-gradient(90deg, rgba(167, 178, 230, 0.5) 0%, #ffffff 100%);
  box-shadow: 10px 0px 10px rgba(27, 45, 117, 0.1);
  padding: 60px 48px;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

// 프로필
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const EmailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #8c8c8c;
`;

export const NameText = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

// 메뉴
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MenuItem = styled.button`
  font-weight: bold;
  font-size: 24px;
  color: #8c8c8c;
  background-color: transparent;
  border: none;
  text-align: left;
  height: 100%;
`;

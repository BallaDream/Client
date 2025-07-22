import styled from 'styled-components';

export const Container = styled.div`
  width: 346px;
  height: 100%;
  background: linear-gradient(90deg, rgba(167, 178, 230, 0.5) 0%, #ffffff 100%);
  box-shadow: 10px 0px 10px rgba(27, 45, 117, 0.1);
  padding: 60px 48px 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  display: flex;
  justify-content: space-between;
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
  margin-top: 148px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: -28px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -4px;
`;

export const MenuItemWrapper = styled.div`
  position: relative;
`;

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  font-size: 24px;
  color: ${({ $isActive }) => ($isActive ? '#1B2D75' : '#8c8c8c')};
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 500)};
  background: transparent;
  border: none;
  width: 100%;
  text-align: left;
  padding-bottom: 4px;
`;

export const Underline = styled.div`
  height: 2px;
  width: 88px;
  background-color: black;
  border-radius: 2px;
`;

// 푸터
export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #8c8c8c;
  width: 100%;
  margin-bottom: 12px;
`;

export const MenuButtonText = styled.button`
  background: none;
  border: none;
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-right: 8px;
`;

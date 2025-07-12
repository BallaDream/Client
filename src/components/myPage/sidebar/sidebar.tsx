import { useNavigate } from 'react-router-dom';

import Profile from './profile';
import * as S from './sidebar.style';

const menuItems = ['회원정보', '추천이력', '관심제품', '로그아웃'];

function Sidebar() {
  const navigate = useNavigate();

  const handleMenuItemClick = (index: number) => {
    if (index === 3) {
      console.log('로그아웃');
      localStorage.removeItem('token');
      navigate('/');
      return;
    }
    navigate(`/my/${index}`);
  };

  return (
    <S.Container>
      <Profile />
      <S.MenuContainer>
        {menuItems.map((item, index) => (
          <S.MenuItem key={item} onClick={() => handleMenuItemClick(index)}>
            {item}
          </S.MenuItem>
        ))}
      </S.MenuContainer>
    </S.Container>
  );
}

export default Sidebar;

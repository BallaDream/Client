import * as S from './sidebar.style';

import Avatar from '@/assets/icons/avatar.svg?react';
import { useAppSelector } from '@/store/hooks';

function Profile() {
  const userName = useAppSelector((state) => state.auth.username);
  const nickname = useAppSelector((state) => state.auth.nickname);

  return (
    <S.ProfileContainer>
      <Avatar />
      <S.NameText>{nickname}</S.NameText>
      <S.EmailText>{userName}</S.EmailText>
    </S.ProfileContainer>
  );
}

export default Profile;

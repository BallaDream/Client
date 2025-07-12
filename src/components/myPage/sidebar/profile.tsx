import * as S from './sidebar.style';

import Avatar from '@/assets/icons/avatar.svg?react';

function Profile() {
  return (
    <S.ProfileContainer>
      <Avatar />
      <S.EmailText>test@test.com</S.EmailText>
      <S.NameText>닉네임</S.NameText>
    </S.ProfileContainer>
  );
}

export default Profile;

import Header from '@/components/common/header/header';
import SignupForm from '@/components/signupPage/signupForm';

import * as S from './signupPage.style';

export default function SignupPage() {
  return (
    <S.Container>
      <Header />
      <SignupForm />
    </S.Container>
  );
}

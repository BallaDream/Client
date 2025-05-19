import Header from '@/components/common/header/header';
import * as S from './signupPage.style';
import SignupForm from '@/components/signupPage/signupForm';

export default function SignupPage() {
  return (
    <S.Container>
      <Header />
      <SignupForm />
    </S.Container>
  );
}

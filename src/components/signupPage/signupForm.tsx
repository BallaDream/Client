import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { TERMS_1, TERMS_2 } from '@/constants/terms';

import * as S from './signupForm.style';

interface IForm {
  id: string;
  password: string;
  email: string;
  code: string;
}

interface IChecked {
  terms1: boolean;
  terms2: boolean;
}

export default function SignupForm() {
  const [form, setForm] = useState<IForm>({
    id: '',
    password: '',
    email: '',
    code: '',
  });

  const [checked, setChecked] = useState<IChecked>({
    terms1: false,
    terms2: false,
  });

  const isFormValid = form.id.trim() && form.password.trim() && form.email.trim() && form.code.trim() && checked.terms1 && checked.terms2;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked: isChecked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: isChecked }));
  };

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Title>일반 회원가입</S.Title>

        <S.InputGroup>
          <S.Input name="id" value={form.id} onChange={handleChange} placeholder="아이디" />
          <S.Input name="password" type="password" value={form.password} onChange={handleChange} placeholder="비밀번호" />
        </S.InputGroup>

        <S.InputGroup>
          <S.InputWrapper>
            <S.Input name="email" value={form.email} onChange={handleChange} placeholder="이메일주소" />
            <S.InputButton>전송</S.InputButton>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input name="code" value={form.code} onChange={handleChange} placeholder="인증번호" />
            <S.InputButton>확인</S.InputButton>
          </S.InputWrapper>
        </S.InputGroup>

        <S.CheckboxWrap>
          <label>
            <input type="checkbox" name="terms1" checked={checked.terms1} onChange={handleCheck} />
            <b>[필수] 이용약관 동의</b>
          </label>
          <S.TermBox>{TERMS_1}</S.TermBox>

          <label>
            <input type="checkbox" name="terms2" checked={checked.terms2} onChange={handleCheck} />
            <b>[필수] 개인정보 수집 이용 동의</b>
          </label>
          <S.TermBox>{TERMS_2}</S.TermBox>
        </S.CheckboxWrap>

        <S.SubmitButton disabled={!isFormValid}>회원가입</S.SubmitButton>
      </S.Container>
    </S.PageWrapper>
  );
}

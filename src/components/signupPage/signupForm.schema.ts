/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const signupSchema = yup.object({
  username: yup.string().email('이메일 형식이어야 합니다.').required('아이디(이메일)를 입력해주세요'),
  password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').required('비밀번호를 입력해주세요'),
  authNum: yup.string().required('인증번호를 입력해주세요'),
  terms1: yup.boolean().oneOf([true], '이용약관에 동의해주세요').required(),
  terms2: yup.boolean().oneOf([true], '개인정보 수집 이용에 동의해주세요').required(),
});

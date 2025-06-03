import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup.string().email('이메일 형식이 아닙니다.').required('아이디를 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

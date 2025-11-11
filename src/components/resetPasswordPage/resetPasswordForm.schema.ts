import * as yup from 'yup';

export const resetPasswordSchema = yup.object({
  email: yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력해주세요'),
  authNumber: yup.string().required('인증번호를 입력해주세요'),
  newPassword: yup.string().min(8, '8자 이상 입력해주세요').required('새 비밀번호를 입력해주세요'),
});

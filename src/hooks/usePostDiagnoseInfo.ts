import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { TPostDiagnoseInfoValue } from '@/types/resultPage/result';

import { postDiagnoseInfo } from '@/api/resultPage/result';
import { resetUpload, uploadError } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export const usePostDiagnoseInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (value: TPostDiagnoseInfoValue) => postDiagnoseInfo(value),
    onSuccess: (data) => {
      console.log('포스트 성공');
      dispatch(resetUpload());
      navigate(`/result/${data.diagnoseId}`);
    },
    onError: (error: unknown) => {
      dispatch(resetUpload());
      const errorMessage = (error as AxiosError<{ errorMessage?: string }>)?.response?.data?.errorMessage ?? '알 수 없는 오류가 발생했습니다.';
      dispatch(uploadError(errorMessage));
    },
  });
};

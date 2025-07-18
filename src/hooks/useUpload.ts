import { useMutation } from '@tanstack/react-query';

import { usePostDiagnoseInfo } from './usePostDiagnoseInfo';

import { postUpload } from '@/api/uploadPage/upload';
import { uploadError } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export const useUpload = () => {
  const dispatch = useAppDispatch();
  const { mutate: postDiagnose } = usePostDiagnoseInfo();

  return useMutation({
    mutationFn: (file: File) => postUpload(file),
    onSuccess: (uploadResponse) => {
      console.log('업로드성공');
      postDiagnose(uploadResponse.result);
    },
    onError: (error: any) => {
      if (error.response?.status === 422) {
        const result = error.response.data?.result;
        dispatch(uploadError(typeof result === 'string' ? result : '알 수 없는 이유로 분석을 실패했습니다. 사진을 다시 선택해주세요.'));
      } else {
        dispatch(uploadError('알 수 없는 에러가 발생했습니다.'));
      }
    },
  });
};

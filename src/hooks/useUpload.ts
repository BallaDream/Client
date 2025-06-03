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
    onError: () => {
      console.log('에러');
      dispatch(uploadError());
    },
  });
};

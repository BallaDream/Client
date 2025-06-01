import { useMutation } from '@tanstack/react-query';

import { postUpload } from '@/api/uploadPage/upload';
import { uploadError } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export const useUpload = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (file: File) => postUpload(file),
    onSuccess() {
      console.log('성공');
      //여기서 다시 백엔드로 전송해야함
    },
    onError() {
      dispatch(uploadError());
    },
  });
};

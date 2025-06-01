import { useMutation } from '@tanstack/react-query';

import { postUpload } from '@/api/uploadPage/upload';
import { uploadError, uploadSuccess } from '@/slices/uploadSlice';
import { useAppDispatch } from '@/store/hooks';

export const useUpload = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (file: File) => postUpload(file),
    onSuccess() {
      dispatch(uploadSuccess());
    },
    onError() {
      dispatch(uploadError());
    },
  });
};

import { useMutation } from '@tanstack/react-query';

import { postUpload } from '@/api/uploadPage/upload';

export const useUpload = () => {
  return useMutation({
    mutationFn: (file: File) => postUpload(file),
  });
};

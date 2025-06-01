import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import type { TPostDiagnoseInfoValue } from '@/types/resultPage/result';

import { postDiagnoseInfo } from '@/api/resultPage/result';

export const usePostDiagnoseInfo = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (value: TPostDiagnoseInfoValue) => postDiagnoseInfo(value),
    onSuccess(data) {
      navigate(`/result/${data.diagnoseId}`);
    },
  });
};

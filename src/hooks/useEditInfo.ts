import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import { putUserNickname } from '@/api/myPage/my';
import { setLogout } from '@/slices/authSlice';
import { openModal } from '@/slices/modalSlice';

export const useEditNickname = (fn: () => void) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (nickName: string) => putUserNickname(nickName),
    onSuccess: () => {
      // 닉네임 변경 성공 후 안내 메시지와 함께 로그아웃
      alert('닉네임이 변경되었습니다. 보안상 다시 로그인해주세요.');

      // 로그아웃 처리
      dispatch(setLogout());

      // 로그인 모달 띄우기
      dispatch(openModal('login'));

      fn();
    },
    onError: (error) => {
      console.error('닉네임 수정 실패:', error);
    },
  });
};

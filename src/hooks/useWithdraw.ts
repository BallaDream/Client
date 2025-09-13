// src/hooks/useWithdraw.ts

import { useDispatch } from 'react-redux';

import axiosInstance from '@/api/axiosInstance';
import { setLogout } from '@/slices/authSlice';

export default function useWithdraw() {
  const dispatch = useDispatch();

  const withdraw = async () => {
    try {
      await axiosInstance.delete('/user');

      // 로그아웃 처리
      dispatch(setLogout());
      return true;
    } catch (error) {
      console.error('회원탈퇴 실패:', error);
      alert('회원탈퇴에 실패했습니다. 잠시 후 다시 시도해주세요.');
      return false;
    }
  };

  return { withdraw };
}

import { useModalContext } from '@/components/modal/modalCotext';

export const useModal = () => {
  const { modal, openModal, closeModal } = useModalContext();
  return { modal, openModal, closeModal };
};

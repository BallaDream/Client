import LoginModal from './loginModal';

import { useAppSelector } from '@/store/hooks';

export default function ModalRenderer() {
  const modalType = useAppSelector((state) => state.modal.modalType);

  switch (modalType) {
    case 'login':
      return <LoginModal />;
    default:
      return null;
  }
}

import Modal from '@/components/common/modal';
import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from 'react';
import { ToggleModalContextProps, ToggleModalContextType } from './types';

const defaultToggleModalContext = {
  openModal: () => {},
  closeModal: () => {},
};

const ToggleModalContext = createContext<ToggleModalContextType>(
  defaultToggleModalContext,
);

export const ToggleModalProvider = ({ children }: ToggleModalContextProps) => {
  const [modalContent, setModalContent] = useState<ReactElement | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = useCallback(
    (modalContent) => {
      setModalContent(modalContent);
      setShowModal(!showModal);
    },
    [showModal, modalContent],
  );
  const closeModal = useCallback(() => {
    setShowModal(!showModal);
    setModalContent(null);
  }, [showModal, modalContent]);
  const value = { openModal, closeModal };
  return (
    <ToggleModalContext.Provider value={value}>
      {children}
      {showModal && <Modal modalContent={modalContent} />}
    </ToggleModalContext.Provider>
  );
};

export const useOpenModal = () => {
  const { openModal } = useContext(ToggleModalContext);
  return openModal;
};

export const useCloseModal = () => {
  const { closeModal } = useContext(ToggleModalContext);
  return closeModal;
};

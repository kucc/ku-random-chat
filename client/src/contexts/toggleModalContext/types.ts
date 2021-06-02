import { ReactElement, ReactNode } from 'react';

export type ToggleModalContextType = {
  openModal: (modalContent: ReactElement | null) => void;
  closeModal: () => void;
};

export type ToggleModalContextProps = {
  children: ReactNode;
};

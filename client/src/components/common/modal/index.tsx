import React from 'react';
import { ModalProps } from './types';
import * as S from './styles';

const Modal = ({ modalContent }: ModalProps) => (
  <S.Modal>
    <S.Container onClick={(e) => e.stopPropagation()}>
      {modalContent}
    </S.Container>
  </S.Modal>
);

export default Modal;

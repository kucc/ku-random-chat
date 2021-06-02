import React, { useCallback } from 'react';
import * as S from './styles';
import { EmailVerificationModalProps } from './types';
import { STATIC_URL } from '@assets/constant';
import { useCloseModal } from '@/contexts/toggleModalContext';
import { useHistory } from 'react-router';

const EmailVerificationModal = ({}: EmailVerificationModalProps) => {
  const history = useHistory();
  const closeModal = useCloseModal();
  const confirmPressed = useCallback(() => {
    closeModal();
    history.replace('/');
  }, []);

  return (
    <>
      <S.ModalImage src={STATIC_URL.EMAIL} />
      <S.ModalHeaderText>메일 발송 완료</S.ModalHeaderText>
      <S.ModalBody>
        <S.ModalText>
          korea.ac.kr 계정으로 메일을 발송했습니다! 메일로 전송된 링크를
          클릭하여 고려대학교 학생 인증을 해 주세요.
        </S.ModalText>
      </S.ModalBody>
      <S.ModalButton onClick={confirmPressed}>확인</S.ModalButton>
    </>
  );
};

export default EmailVerificationModal;

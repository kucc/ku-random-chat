import React from 'react';
import Modal from '../common/modal';
import * as S from './styles';
import { SignInAlertModalProps } from './types';
import { STATIC_URL } from '@assets/constant';
import authAPI from '@/common/lib/api/auth';
import { useHistory } from 'react-router';

const SignInAlertModal = ({
  show,
  onToggleModal,
  userId,
}: SignInAlertModalProps) => {
  const history = useHistory();

  const sendEmail = async () => {
    await authAPI.sendEmail(userId);
    history.go(0);
  };

  return (
    <Modal show={show} onToggle={onToggleModal}>
      <S.ModalImage src={STATIC_URL.WARNING} />
      <S.ModalHeaderText>메일 미인증</S.ModalHeaderText>
      <S.ModalBody>
        <S.ModalText>
          미인증된 유저는 서비스를 이용할 수 없습니다! 메일로 전송된 링크를
          클릭하여 고려대학교 학생 인증을 해 주세요.
        </S.ModalText>
      </S.ModalBody>
      <S.ModalButton onClick={onToggleModal}>확인</S.ModalButton>
      <S.ModalEmailButton onClick={sendEmail}>
        메일을 다시 받을래요
      </S.ModalEmailButton>
    </Modal>
  );
};

export default SignInAlertModal;

import React, { useEffect, useRef } from 'react';
import Modal  from '../common/modal';
import * as S from './styles';
import { CreateChatRoomModalProps } from './types';

const CreateChatRoomModal = ({show, onToggleModal} : CreateChatRoomModalProps )=>{
    const chatRoomTitleInput = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(chatRoomTitleInput.current) chatRoomTitleInput.current.focus();
    },[show])

    return (
        <Modal show={show} onToggle={onToggleModal} >
            <S.ModalHeaderText>채팅방 만들기</S.ModalHeaderText>
            <S.ModalBody>
                <S.ChatRoomInfoInput placeholder={"채팅방 이름"} ref={chatRoomTitleInput}/>
                <S.ModalButtonContainer>
                    <S.ModalButton>방 만들기</S.ModalButton>
                    <S.ModalButton onClick={onToggleModal} >취소</S.ModalButton>
                </S.ModalButtonContainer>
            </S.ModalBody>
        </Modal>
    )
}

export default CreateChatRoomModal;
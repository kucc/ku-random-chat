import React, { useEffect, useState, useReducer } from "react";
import * as S from "./styles";
import InfoInput from "@components/info-input";
import Header from "@components/header";
import MyPageInput from "@components/my-page-input";
import MyPageConstant from "@components/my-page-constant"
import { InfoInputCarrier } from "../info/styles";
import  infoAPI from '@/common/lib/api/info';
import  myAPI from '@/common/lib/api/mypage';
import InfoModel from '@/common/model/info';
import MyPwModel from '@/common/model/my-page';
import MyIdModel from '@/common/model/my-page';
import { mypageAction } from './types';
import { useHistory } from 'react-router';

const mypageReducer = (state: MyPwModel, action: mypageAction) => {
  switch (action.type) {
    case 'newpassword':
      return { ...state, newPw: action.payload}
    case 'confirmpassword':
      return { ...state, confirmPw: action.payload}
  }
};

const MyPage = () => {
  const [isPasswordChecked, setPasswordChecked] = useState(true);
  const [isConfirmedPasswordChecked, setConfirmedPasswordChecked] = useState(true);

  const [password, setPassword] = useState("");

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    if (password.length >= 6 && password.length <= 15) {
      setPassword(password);
      setPasswordChecked(true);
    } else {
      setPasswordChecked(false);
    }
  };

  const checkConfirmedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmedPassword = e.target.value;
    if (password === confirmedPassword) {
      setConfirmedPasswordChecked(true);
    } else {
      setConfirmedPasswordChecked(false);
    }
  };

  const [mypw, dispatch] = useReducer(mypageReducer, {} as MyPwModel);
  const history = useHistory();

  const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'newpassword', payload: e.currentTarget.value });
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'confirmpassword', payload: e.currentTarget.value });
  };

  const postNewPw = async () => {
    const result = await myAPI.modifyPassword(mypw);
    history.replace('/');
  };

  return (
    <S.MyPageContainer>
      <S.MyPageCarrier>
        <Header/>
        <S.MyPageTitle>내정보 보기</S.MyPageTitle>
        <S.InputContainer>
          <MyPageConstant
            label="아이디"
            userId = "appie701"
          />
          <MyPageInput
            label="새 비밀번호"
            placeholder="6 글자 이상 15 글자 이하로 입력"
            type="password"
            text="6 ~ 15 글자로 입력해 주세요"
            checkInput={checkPassword}
            isChecked={isPasswordChecked}
            onChange = {onChangeNewPassword}
          />
          <MyPageInput
            label="새 비밀번호 확인"
            type="password"
            text="비밀번호가 일치하지 않습니다"
            checkInput={checkConfirmedPassword}
            isChecked={isConfirmedPasswordChecked}
            onChange = {onChangeConfirmPassword}
          />
        </S.InputContainer>
        <InfoInputCarrier>
          <InfoInput
              label="연령대"
              value="24"
          />
          <InfoInput
              label="학과"
              value="컴퓨터학과"
          />
          <InfoInput
              label="성별"
              value="남"
          />
        </InfoInputCarrier>
        <S.ModifyButton onClick = {postNewPw}>수정하기</S.ModifyButton>
        <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      </S.MyPageCarrier>
    </S.MyPageContainer>
  );
}

export default MyPage;
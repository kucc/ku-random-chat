import React, { useEffect, useState, useReducer } from "react";
import * as S from "./styles";
import InfoInput from "@components/info-input";
import Header from "@components/header";
import MyPageInput from "@components/my-page-input";
import MyPageConstant from "@components/my-page-constant";
import { InfoInputCarrier } from "../info/styles";
import  infoAPI from '@/common/lib/api/info';
import  myAPI from '@/common/lib/api/mypage';
import InfoModel from '@/common/model/info';
import MyPwModel from '@/common/model/my-page';
import { mypageAction } from './types';
import { useHistory } from 'react-router';
import axios from "axios";

const mypageReducer = (state: MyPwModel, action: mypageAction) => {
  switch (action.type) {
    case 'newpassword':
      return { ...state, newPw: action.payload}
    case 'confirmpassword':
      return { ...state, confirmPw: action.payload}
  }
};

const MyPage = () => {
  // password checking
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

  // state management
  const history = useHistory();

  // 아이디 받아오기
  const [mypageuserid, setUserId] = useState<string>(""); 
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    const mypageid = await myAPI.getId();
    setUserId(mypageid);
  };

  // 유저정보 받아오기 (나이, 전공, 성별)
  const [mypageuserinfo, setUserInfo] = useState<InfoModel>({age: 24, major: "컴퓨터학과", gender:"남자"}); //초기화 안해도 괜찮나
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const mypageinfo = await infoAPI.getInfo();
    setUserInfo(mypageinfo);
  };

  // 서버에 비밀번호 수정 전송
  const [mypw, dispatch] = useReducer(mypageReducer, {} as MyPwModel);
  
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
            text = {mypageuserid}
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
          <MyPageConstant
              label="연령대"
              text={mypageuserinfo!.age} // non null assertion
          />
          <MyPageConstant
              label="학과"
              text={mypageuserinfo!.major}
          />
          <MyPageConstant
              label="성별"
              text={mypageuserinfo!.gender}
          />
        </InfoInputCarrier>
        <S.ModifyButton onClick = {postNewPw}>수정하기</S.ModifyButton>
        <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
      </S.MyPageCarrier>
    </S.MyPageContainer>
  );
}

export default MyPage;
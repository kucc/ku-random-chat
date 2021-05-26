import React, { useReducer } from "react";
import * as S from "./styles";
import InfoInput from "@components/info-input";
import Header from "@components/header";
import InfoModel from '@/common/model/info';
import { infoAction } from './types';
import { useHistory } from 'react-router';
import userAPI from '@/common/lib/api/user';


const infoReducer = (state: InfoModel, action: infoAction) => {
  switch (action.type) {
    case 'age':
      return { ...state, userId: action.payload };
    case 'major':
      return { ...state, major: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
  }
};


const InfoPage = () => {
    const [info, dispatch] = useReducer(infoReducer, {} as InfoModel);
    const history = useHistory();

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'age', payload: e.currentTarget.value });
    };

    const onChangeMajor = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'major', payload: e.currentTarget.value });
    };

    const onChangeGender = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'gender', payload: e.currentTarget.value})
    }

    const postInfo = async () => {
      const result = await userAPI.enterInfo(info.age, info.major, info.sex);
      history.replace('/');
    };

    return (
        <S.InfoContainer>
          <S.InfoCarrier>
            <Header/>
            <S.InfoTitle>기본정보 입력</S.InfoTitle>
            <S.InfoInputCarrier>
              <InfoInput
                label="연령대"
                placeholder="24"
                onChange = {onChangeAge}
              />
              <InfoInput
                label="학과"
                placeholder="컴퓨터학과"
                onChange = {onChangeMajor}
              />
              <InfoInput
                label="성별"
                placeholder="남"
                onChange = {onChangeGender}
              />
            </S.InfoInputCarrier>
            <S.ModifyButton onClick = {postInfo}>입력하기</S.ModifyButton>
            <S.Copyright>ⓒ KU RANDOM CHAT All rights reserved.</S.Copyright>
          </S.InfoCarrier>
        </S.InfoContainer>
    );
}

export default InfoPage;
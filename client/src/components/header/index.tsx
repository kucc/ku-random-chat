import React from "react";
import * as S from "./styles";
import infoimage from "@assets/info.png";

const Header = () => {
  return(
      <S.HeaderContainer>
        <S.InfoButton src={infoimage}/>
      </S.HeaderContainer>
  );
};

export default Header;
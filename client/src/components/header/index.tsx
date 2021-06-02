import React, { useState } from "react";
import * as S from "./styles";
import infoImage from "@assets/info-img.png";
import infoImageHover from "@assets/info-img-hover.png";
import { useHistory } from "react-router";

const Header = () => {
  
  const [hoverState, setHoverState] = useState(false);

  const history = useHistory();
  const goToInfo = () => {
    history.push('/info')
  }

  return(
      <S.HeaderContainer>
        <S.InfoButton
        onMouseOver={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
        onClick={goToInfo}
        src={hoverState? infoImageHover: infoImage}/>
      </S.HeaderContainer>
  );
};

export default Header;
import React from 'react';
import logo from '../../Assets/logo-itau.png';

import * as S from "./styled"; 

export default function Header() {
  return (
    <S.Header>
       
            <img src={logo} alt="Logo Itaú"/>
        
    </S.Header>
  )
}


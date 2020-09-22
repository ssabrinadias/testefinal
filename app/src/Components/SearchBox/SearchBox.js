import React from 'react'

import {Container} from "./styles"

export default function Header(){
    return (
        <Container>
              <div class="search">
                <div class="search__wrapper">
                  <input
                    type="text"
                    class="search__input"
                    placeholder="Faça sua busca"
                  />

                  <button type="submit" class="search__button">
                    <img src="./img/icon__search.svg" alt="Ícone de Lupa" />
                  </button>
                </div>
              </div>
        </Container>
    )
}

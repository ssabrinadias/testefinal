import styled from "styled-components"

export const Container = styled.div`
    .search__wrapper {
    width: 100%;
    display: flex;
  }
  
  .search__input {
    width: 100%;
    border: 2px solid  #ec7000;
    border-right: none;
    padding: 0 20px;
    height: 68px;
    font-size: 18px;
    border-radius: 10px 0 0 10px;
    color: $dark;
  }
  
  .search__button {
    min-width: 68px;
    height: 68px;
    border: 2px solid  #ec7000;
    text-align: center;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    background-color: #f79c60;
  }
`;


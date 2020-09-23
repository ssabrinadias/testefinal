import React from 'react'

export default function UserCard(props) {
  const { username } = props
  
  return (
    <div class="sidebar__profile">
        <p class="sidebar__profile-name">
          Olá, <span>{username}</span>
        </p>
        <img class="sidebar__profile-icon" src="./img/icon__user.svg" alt="Icone de usuário">
        <a href="#" class="sidebar__profile-link">
          <img src="./img/icon__link.svg" alt="Ícone de link externo">
          <span>Perfil Completo</span>
        </a>
    </div>
  )
}

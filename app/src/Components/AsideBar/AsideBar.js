import React from 'react'
import UserCard from '../UserCard/UserCard'
import SideBarList from '../SideBarList';

export default function AsideBar() {
  return (
    <aside class="sidebar">
      <UserCard />
      <div class="sidebar__content">
        <div class="sidebar__profile">
        </div>
        <SideBarList />
      </div>
    </aside>
  )
}

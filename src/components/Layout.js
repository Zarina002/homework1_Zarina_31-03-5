import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/create">Создать Пост</Link></li>
      </ul>
    </nav>
    <main>
      <Outlet/>
    </main>
    <footer>Контент футера</footer>
  </div>
);

export default Layout;
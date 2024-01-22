import React from 'react';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside className="hidden md:block h-screen fixed w-[280px]  border-r"></aside>
      <main className="py-20 ml-0 md:ml-[280px] px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

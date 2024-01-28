import React, { useEffect } from 'react';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { userStore } from './store/userStore';
import Aside from './components/aside/aside';

const Layout = () => {
  const { setUserInfo } = userStore();
  const { user } = useAuth0();
  useEffect(() => {
    (async () => {
      if (user !== undefined) {
        const userInput = { email: user?.email, profile: user?.picture };
        const result = await fetch('http://localhost:3000/api/auth/register', {
          body: JSON.stringify(userInput),
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const data = await result.json();
        setUserInfo(data.data);
      }
    })();
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside className="hidden md:block h-screen fixed md:w-[200px] lg:w-[250px]  border-r">
        <Aside />
      </aside>
      <main className="py-20 ml-0  md:ml-[200px] lg:ml-[250px] px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

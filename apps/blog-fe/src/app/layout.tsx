import React, { useEffect } from 'react';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = () => {
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    (async () => {
      if (isAuthenticated && user !== undefined) {
        console.log(user);
        const userInput = { email: user.email, profile: user.picture };
        await fetch('http://localhost:3000/api/auth/register', {
          body: JSON.stringify(userInput),
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
        });
        console.log(userInput);
      }
      console.log('asd', user);
    })();
  }, [isAuthenticated]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside className="hidden md:block h-screen fixed md:w-[230px] lg:w-[280px]  border-r"></aside>
      <main className="py-20 ml-0  md:ml-[230px] lg:ml-[280px] px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

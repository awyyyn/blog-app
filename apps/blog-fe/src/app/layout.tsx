import React, { useEffect } from 'react';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { userStore } from './store/userStore';
import Aside from './components/aside/aside';
import CreatePostModal from './components/create-post-modal/create-post-modal';

const Layout = () => {
  const { setUserInfo } = userStore();
  const { user } = useAuth0();
  useEffect(() => {
    (async () => {
      if (user) {
        const userInput = { email: user?.email, profile: user?.picture };
        const result = await fetch('http://localhost:3000/api/auth/register', {
          body: JSON.stringify(userInput),
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const data = await result.json();
        console.log(data, 'asdadasdsad');
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
      <main className="py-20 ml-0 min-w-max     md:ml-[200px] lg:ml-[250px] lg:mr-[350px] xl:mr-[450px] sm:px-10 px-5 ">
        <CreatePostModal />
        <Outlet />
      </main>
      <aside className="hidden border-l border-stone-200  lg:block h-screen right-0 top-0 fixed   lg:w-[350px] xl:w-[450px]  border-r"></aside>
    </div>
  );
};

export default Layout;

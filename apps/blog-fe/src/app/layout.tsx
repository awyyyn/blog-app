import React, { PropsWithChildren } from 'react';
import Header from './components/header/header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

// import styles from './header.module.css';

/* eslint-disable-next-line */
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, NavbarBrand, NavbarContent, Link } from '@nextui-org/react';
import { Link as RouterLink } from 'react-router-dom';
import SignInButton from '../sign-in-button/sign-in-button';
import UserNavBarContent from './user-navbar-content';
// import { userStore } from '../../store/userStore';
export interface HeaderProps {}

/* eslint-disable-next-line */
const links = [
  {
    path: '/',
    label: 'Home',
  },
];

export function Header(props: HeaderProps) {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar className="top-0 fixed" isBordered isBlurred>
      <NavbarBrand>
        <Link
          href={'/'}
          reloadDocument
          as={RouterLink}
          className="font-bold text-inherit"
        >
          Bloog
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <input value={query} onChange={(e) => setQuery(e.target.value)} /> */}
        {/* <Input onChange={(e) => setQuery(e.target.value)} /> */}
      </NavbarContent>
      {isAuthenticated ? <UserNavBarContent /> : <SignInButton />}
    </Navbar>
  );
}

export default Header;

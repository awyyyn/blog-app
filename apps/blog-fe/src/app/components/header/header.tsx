// import styles from './header.module.css';

/* eslint-disable-next-line */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import SignInButton from '../sign-in-button/sign-in-button';
import UserNavBarContent from './user-navbar-content';
// import NotificationPopOver from '../notification-popover/notification-popover';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useCreatePostStore } from '../../store/createPostStore';
// import { userStore } from '../../store/userStore';
export interface HeaderProps {}

/* eslint-disable-next-line */
const links = [
  {
    path: '/',
    label: 'Home',
  },
];

export const items = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Saved Posts',
    path: '/saved-posts',
  },
  {
    label: 'Create Post',
    path: '#create-post',
  },
];

export function Header(props: HeaderProps) {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  const { setModal } = useCreatePostStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="top-0 fixed"
      isBordered
      isBlurred
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="space-x-4">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden cursor-pointer z-[99] h-6 "
        />
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
      {isAuthenticated ? (
        <NavbarContent as="div" justify="end">
          {/* <NotificationPopOver /> */}
          <UserNavBarContent />
        </NavbarContent>
      ) : (
        <SignInButton />
      )}
      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={RouterLink}
              color={
                location.pathname === item.path ? 'secondary' : 'foreground'
              }
              className="w-full"
              onClick={() => {
                if (item.label === 'Create Post') {
                  setIsMenuOpen(false);
                  setModal(true);
                }
              }}
              // href={item.path}
              to={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;

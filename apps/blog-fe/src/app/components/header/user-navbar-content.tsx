import React from 'react';
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarContent,
  User,
} from '@nextui-org/react';
import { useAuth0 } from '@auth0/auth0-react';
import { userStore } from '../../store/userStore';

function UserNavBarContent() {
  const { logout } = useAuth0();
  const { removeUserInfo } = userStore();

  const handleLogout = () => {
    logout();
    removeUserInfo();
  };

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <User
            name=""
            avatarProps={{
              className: 'cursor-pointer',
              isBordered: true,
              name: 'asd',
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
}

export default UserNavBarContent;

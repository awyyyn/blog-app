import { Button } from '@nextui-org/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RiHome5Line } from 'react-icons/ri';
import { MdSavedSearch } from 'react-icons/md';

const style = {
  width: 18,
  height: 18,
};
const links = [
  { path: '/', label: 'Home', Icon: <RiHome5Line style={style} /> },
  { path: '/saved', label: 'Saved', Icon: <MdSavedSearch style={style} /> },
  // { path: '/', label: 'Home',  },
];

const Aside = () => {
  return (
    <div className="py-20 space-y-2 w-full px-5">
      {/* <Link href="/" as={RouterLink}>
        Home
      </Link> */}
      {links.map(({ path, label, Icon }) => (
        <Button
          key={path}
          startContent={Icon}
          variant="light"
          to={path}
          fullWidth
          className="justify-start gap-x-4"
          as={RouterLink}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Aside;

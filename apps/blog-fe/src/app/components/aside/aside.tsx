import { Button } from '@nextui-org/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { RiHome5Line } from 'react-icons/ri';
import { MdSavedSearch } from 'react-icons/md';
import { IoCreate } from 'react-icons/io5';
import { useCreatePostStore } from '../../store/createPostStore';

const Aside = () => {
  const { setModal, modal } = useCreatePostStore();

  const style = {
    width: 18,
    height: 18,
  };
  const links = [
    {
      path: '/',
      label: 'Home',
      Icon: <RiHome5Line style={style} />,
      button: false,
    },
    {
      label: 'Create Post',
      Icon: <IoCreate style={style} />,
      button: true,
      event: () => setModal(!modal.isOpen),
    },
    {
      path: '/saved-posts',
      label: 'Saved',
      Icon: <MdSavedSearch style={style} />,
      button: false,
    },
  ];

  return (
    <div className="py-20 space-y-2 w-full px-5">
      {/* <Link href="/" as={RouterLink}>
        Home
      </Link> */}
      {links.map(({ path, label, Icon, button, event }, indx) => {
        return button ? (
          <Button
            onClick={event}
            fullWidth
            className="justify-start gap-x-4"
            key={indx}
            variant="light"
            startContent={Icon}
          >
            {label}
          </Button>
        ) : (
          <Button
            key={indx}
            startContent={Icon}
            variant="light"
            to={path}
            fullWidth
            // reloadDocument={path === '/' ? true : false}
            className="justify-start gap-x-4"
            as={RouterLink}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};

export default Aside;

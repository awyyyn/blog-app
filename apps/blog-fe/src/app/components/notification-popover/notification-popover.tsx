import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@nextui-org/react';
import { RiNotificationFill } from 'react-icons/ri';

const NotificationPopOver = () => {
  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <Button isIconOnly variant="light">
          <RiNotificationFill className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationPopOver;

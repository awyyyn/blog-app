import { Card, CardHeader, Avatar, Button } from '@nextui-org/react';
import { useState } from 'react';

const UserCard = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="w-full  border-none" shadow="none">
      <CardHeader className="justify-between ">
        <div className="flex gap-5 items-center">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="block">
            <div className="flex  items-center gap-x-2">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @zoeylang
              </h5>
            </div>
            <div className="flex gap-x-2 flex-wrap">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 lg:text-xs xl:text-sm">
                  4
                </p>
                <p className=" text-default-400 lg:text-xs xl:text-sm">
                  Following
                </p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 lg:text-xs xl:text-sm">
                  97.1K
                </p>
                <p className="text-default-400 lg:text-xs xl:text-sm">
                  Followers
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={`
            lg:scale-80 xl:scale-100
            ${
              isFollowed
                ? 'bg-transparent text-foreground border-default-200'
                : ''
            }`}
          color="secondary"
          radius="full"
          size="md"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
    </Card>
  );
};

export default UserCard;

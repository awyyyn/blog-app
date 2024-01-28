import React from 'react';
import { User } from '@nextui-org/react';

interface CommentProps {
  name: string;
  comment: string;
  profile: string;
}

function Comment({ comment, name, profile }: CommentProps) {
  return (
    <div className="flex w-full   items-baseline   flex-nowrap     ">
      <User
        name
        avatarProps={{
          size: 'sm',
          src: profile,
        }}
      />
      <div className="-space-y-0.5 px-3 self-center py-2 bg-stone-100 w-full rounded-xl">
        <h1 className="font-semibold text-default-500 text-small">{name}</h1>
        <p className="text-default-400 text-small">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;

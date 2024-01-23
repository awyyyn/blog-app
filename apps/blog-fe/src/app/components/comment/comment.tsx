import React from 'react';
import UserAvatar from '../user-avatar/user-avatar';

interface CommentProps {
  name: string;
  comment: string;
}

function Comment({ comment, name }: CommentProps) {
  return (
    <div className="flex w-full  flex-nowrap mb-6 md:mb-0 gap-4">
      <UserAvatar size="sm" />
      <div className="-space-y-0.5 px-3 py-2 bg-stone-100 w-full rounded-xl">
        <h1 className="font-semibold text-default-500 text-small">{name}</h1>
        <p className="text-default-400 text-small">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;

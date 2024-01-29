import { Comment as CommentType } from '@blog-app/shared';
import React from 'react';
import Comment from '../comment/comment';
import { Skeleton } from '@nextui-org/react';

interface CommentsProps {
  profile: string;
  comments: CommentType[];
}

export const CommentsSpinner = () => {
  return (
    <div className="space-y-5 mt-5">
      <div className="flex w-full  flex-nowrap mb-6 md:mb-0 gap-3">
        <Skeleton className="rounded-full h-9 w-9" />
        <div className="-space-y-0.5  bg-stone-100 w-full rounded-xl">
          <Skeleton className="w-full h-14 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

function Comments({ comments, profile }: CommentsProps) {
  return (
    <div className="space-y-5  mt-5">
      {comments &&
        comments?.map((comment, indx) => (
          <Comment
            key={indx}
            profile={comment.user?.profile ?? profile}
            comment={comment.comment}
            name={`${comment?.user?.firstname} ${comment?.user?.lastname}`}
            // name={'asd'}
          />
        ))}
    </div>
  );
}

export default Comments;

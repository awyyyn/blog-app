import { Skeleton } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface PostCardSpinnerProps {}

export function PostCardSpinner(props: PostCardSpinnerProps) {
  return (
    <div className="border relative overflow-hidden shadow-md rounded-lg p-3 w-[340px] space-y-4 sm:w-[440px] lg:min-w-[740px] md:min-w-[540px]">
      <div className="flex  justify-between items-center w-full">
        <div className="flex gap-x-3">
          <div>
            <Skeleton className="rounded-full w-12 h-12" />
          </div>
          <div className="flex flex-col justify-center gap-y-3">
            <Skeleton className="rounded-sm w-60 h-3" />
            <Skeleton className="rounded-sm w-40 h-3" />
          </div>
        </div>
      </div>
      <Skeleton className=" absolute -top-6 right-2 rounded-2xl w-7 h-11" />
      <div className="space-y-2">
        <Skeleton className="w-full h-5 rounded-sm" />
        <Skeleton className="ml-7 min-w-max h-3 rounded-sm" />
        <Skeleton className="w-full h-3 rounded-sm" />
        <Skeleton className="w-full h-3 rounded-sm" />
      </div>
      <div className="flex gap-x-3">
        <Skeleton className="h-5 rounded w-14" />
        <Skeleton className="h-5 rounded w-14" />
      </div>
    </div>
  );
}

export default PostCardSpinner;

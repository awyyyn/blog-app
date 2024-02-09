import { useMutation, useQuery } from '@apollo/client';
import {
  GET_MOST_TALKED_POSTS,
  GET_NOT_FOLLOWED_USERS,
} from '../../gql/queries/user';
import { userStore } from '../../store/userStore';
import { User } from '../../gql-types/graphql';
import UserCard from '../user-card/user-card';
import { FOLLOW_USER } from '../../gql/mutations/user';
import TopPostCard from '../top-post-card/top-post-card';

const RightAside = () => {
  const { user: currentUser } = userStore();
  const { data, error } = useQuery(GET_NOT_FOLLOWED_USERS, {
    variables: {
      userId: currentUser.id as string,
    },
    pollInterval: 300000,
  });
  const [follow, { loading, error: followError }] = useMutation(FOLLOW_USER, {
    refetchQueries: [GET_NOT_FOLLOWED_USERS],
  });
  const { data: topPost } = useQuery(GET_MOST_TALKED_POSTS);

  if (error) return <h1>Error : {error.message}</h1>;

  return (
    <div className="py-20 space-y-2 w-full px-5">
      {(data?.getNotFollowedUser?.length as number) > 0 && (
        <>
          <h1 className="text-lg">User Suggestions</h1>
          {data?.getNotFollowedUser?.map((user) => (
            <UserCard
              handleFollow={(id: string) => {
                follow({
                  variables: {
                    followId: id,
                    userId: currentUser.id as string,
                  },
                });
              }}
              key={user?.id}
              {...(user as User)}
            />
          ))}
        </>
      )}
      <h1 className="text-lg font-bold">Most talked posts</h1>
      <div className="space-y-7">
        {topPost?.getMostTalkedPosts?.map((post) => (
          <TopPostCard
            content={post?.description as string}
            firstname={post?.author?.firstname as string}
            id={post?.id as string}
            lastname={post?.author?.lastname as string}
            title={post?.title as string}
            key={post?.id as string}
          />
        ))}
      </div>
    </div>
  );
};

export default RightAside;

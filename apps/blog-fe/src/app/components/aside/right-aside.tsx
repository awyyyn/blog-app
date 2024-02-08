import { useMutation, useQuery } from '@apollo/client';
import { GET_NOT_FOLLOWED_USERS } from '../../gql/queries/user';
import { userStore } from '../../store/userStore';
import { User } from '../../gql-types/graphql';
import UserCard from '../user-card/user-card';
import { FOLLOW_USER, REMOVE_FOLLOWED_USER } from '../../gql/mutations/user';

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
      <h1>Most talked posts</h1>
    </div>
  );
};

export default RightAside;

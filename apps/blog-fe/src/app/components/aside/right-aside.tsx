import { useQuery } from '@apollo/client';
import { GET_NOT_FOLLOWED_USERS } from '../../gql/queries/user';
import { userStore } from '../../store/userStore';
import { User } from '../../gql-types/graphql';
import UserCard from '../user-card/user-card';

const RightAside = () => {
  const { user: currentUser } = userStore();
  const { data, error } = useQuery(GET_NOT_FOLLOWED_USERS, {
    variables: {
      userId: currentUser.id as string,
    },
  });

  if (error) return <h1>Error : {error.message}</h1>;

  return (
    <div className="py-20 space-y-2 w-full px-5">
      <h1 className="text-lg">User Suggestions</h1>
      {data?.getNotFollowedUser?.map((user) => (
        <UserCard key={user?.id} {...(user as User)} />
      ))}
    </div>
  );
};

export default RightAside;

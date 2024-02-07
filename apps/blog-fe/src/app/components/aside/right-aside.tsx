import { useQuery } from '@apollo/client';
import { GET_NOT_FOLLOWED_USERS } from '../../gql/queries/user';
import { userStore } from '../../store/userStore';
import { Suspense, lazy } from 'react';
const UserCard = lazy(() => import('../user-card/user-card'));

const RightAside = () => {
  const { user } = userStore();
  const { data, loading, error } = useQuery(GET_NOT_FOLLOWED_USERS, {
    variables: {},
  });

  return (
    <div className="py-20 space-y-2 w-full px-5">
      <h1 className="text-lg">User Suggestions</h1>
      <Suspense fallback={<h1>loadding...</h1>}>
        {data?.getNotFollowedUsers.map((user) => (
          <UserCard key={user.id} />
        ))}
      </Suspense>
    </div>
  );
};

export default RightAside;

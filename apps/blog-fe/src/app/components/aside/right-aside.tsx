import UserCard from '../user-card/user-card';

const RightAside = () => {
  return (
    <div className="py-20 space-y-2 w-full px-5">
      <h1 className="text-2xl">User Suggestions</h1>
      <UserCard />
    </div>
  );
};

export default RightAside;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const GET = gql`
  query ExampleQuery {
    getUsers
  }
`;

export function App() {
  const { data, loading } = useQuery(GET);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Hello World {data.getUsers}</h1>
    </div>
  );
}

export default App;

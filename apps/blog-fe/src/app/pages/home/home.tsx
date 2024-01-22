import styles from './home.module.css';
import Layout from '../../layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

/* eslint-disable-next-line */
export interface HomeProps {}

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      description
      author {
        username
      }
      likes
    }
  }
`;

export function Home(props: HomeProps) {
  const { fetchMore, data, loading } = useQuery(GET_POSTS, {});

  return (
    <Layout>
      <div className={styles['container']}>
        <h1>Welcome to Home!</h1>
      </div>
    </Layout>
  );
}

export default Home;

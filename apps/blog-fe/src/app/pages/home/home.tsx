import styles from './home.module.css';
import Layout from '../../layout';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import PostCard, { PostCardProps } from '../../components/post-card/post-card';

/* eslint-disable-next-line */
export interface HomeProps {}

const GET_POSTS = gql`
  query GetPostsWithPagination($offset: Int, $limit: Int) {
    getPostsWithPagination(offset: $offset, limit: $limit) {
      id
      description
      likes
      createdAt
      updatedAt
      author {
        id
        username
        firstname
        lastname
      }
    }
  }
`;

export function Home(props: HomeProps) {
  const [fetchInput, setFetchInput] = useState({ offset: 0, limit: 2 });
  const { fetchMore, data, loading } = useQuery(GET_POSTS, {
    variables: {
      limit: fetchInput.limit,
      offset: fetchInput.offset,
    },
  });

  console.log(data);
  return (
    <Layout>
      <div className={styles['container']}>
        <h1>Welcome to Home!</h1>
      </div>
      <button
        onClick={() => {
          fetchMore({
            variables: {
              offset: data.getPostsWithPagination.length,
            },
          });
        }}
      >
        Fetch More
      </button>
    </Layout>
  );
}

export default Home;

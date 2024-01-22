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
  const { fetchMore, data, loading } = useQuery(GET_POSTS, {
    variables: {
      limit: 3,
      offset: 0,
    },
  });

  console.log(data);
  return (
    <div className="flex items-center flex-col flex-wrap gap-5    md:max-w-min">
      {data &&
        data.getPostsWithPagination.map((post: PostCardProps) => (
          <PostCard key={post.id} {...post} />
        ))}
      {/* <button
    onClick={() => {
      fetchMore({
        variables: {
          offset: data.getPostsWithPagination.length,
        },
      });
    }}
  >
    Fetch More
  </button> */}
    </div>
  );
}

export default Home;

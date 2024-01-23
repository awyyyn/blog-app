import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { Suspense, lazy } from 'react';
import type { PostCardProps } from '../../components/post-card/post-card';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';
const PostCard = lazy(() => import('../../components/post-card/post-card'));

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
      title
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

  if (loading) {
    return <PostCardSpinner />;
  }

  return (
    <div className="flex items-center flex-col flex-wrap gap-5 md:max-w-min">
      {data &&
        data.getPostsWithPagination.map((post: PostCardProps) => (
          <Suspense key={post.id} fallback={<PostCardSpinner />}>
            <PostCard {...post} />
          </Suspense>
        ))}

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
    </div>
  );
}

export default Home;

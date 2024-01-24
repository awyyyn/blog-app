import { useQuery } from '@apollo/client';
import { Suspense, lazy } from 'react';
import type { PostCardProps } from '../../components/post-card/post-card';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';
import { GET_POSTS } from '../../queries/queries';
const PostCard = lazy(() => import('../../components/post-card/post-card'));

export function Home() {
  const { fetchMore, data, loading } = useQuery(GET_POSTS, {
    variables: {
      limit: 3,
      offset: 0,
    },
  });

  if (loading) {
    return <PostCardSpinner />;
  }

  console.log(data);

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

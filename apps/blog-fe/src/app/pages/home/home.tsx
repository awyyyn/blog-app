import { useMutation, useQuery } from '@apollo/client';
import { Suspense, lazy } from 'react';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';
import {
  GET_POSTS_WITH_PAGINATION,
  LIKE_POST,
  UNLIKE_POST,
} from '../../queries/queries';
import { PaginationResult } from '@blog-app/shared';
const PostCard = lazy(() => import('../../components/post-card/post-card'));

export function Home() {
  const { fetchMore, data, loading } = useQuery(GET_POSTS_WITH_PAGINATION, {
    variables: {
      limit: 20,
      offset: 0,
      userId: '65af33af1f968b8d0aaa174b',
    },
  });

  /* LIKE MUTATION */
  const [like_post, { data: liked_data }] = useMutation(LIKE_POST, {
    refetchQueries: [GET_POSTS_WITH_PAGINATION, 'getPostsWithPagination'],
  });
  const [unlike_post] = useMutation(UNLIKE_POST, {
    refetchQueries: [GET_POSTS_WITH_PAGINATION, 'getPostsWithPagination'],
  });

  if (loading) {
    return <PostCardSpinner />;
  }

  const handleLike = (postId: string) => {
    like_post({
      variables: {
        likePostInput: {
          userId: '65af33af1f968b8d0aaa174b',
          postId,
        },
      },
    });
  };

  const handleUnlike = (postId: string) => {
    unlike_post({
      variables: {
        userId: '65af33af1f968b8d0aaa174b',
        postId,
      },
    });
  };

  return (
    <div className="flex items-center flex-col flex-wrap gap-5 md:max-w-min">
      {data &&
        data.getPostsWithPagination.map((post: PaginationResult) => (
          <Suspense key={post.id} fallback={<PostCardSpinner />}>
            <PostCard
              handleLike={() => {
                if (post.liked) {
                  handleUnlike(post.id);
                } else {
                  handleLike(post.id);
                }
              }}
              {...post}
            />
          </Suspense>
        ))}
      {data.getPostsWithPagination.length === (20 || 40) && (
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
      )}
    </div>
  );
}

export default Home;

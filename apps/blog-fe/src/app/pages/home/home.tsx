import { useMutation, useQuery } from '@apollo/client';
import { Suspense, lazy } from 'react';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';
import {
  GET_POSTS_WITH_PAGINATION,
  LIKE_POST,
  UNLIKE_POST,
} from '../../queries/queries';
import { userStore } from '../../store/userStore';
import { PostResult } from '@blog-app/shared';
const PostCard = lazy(() => import('../../components/post-card/post-card'));

export function Home() {
  const { user } = userStore();
  console.log(user, 'usersds');
  const { fetchMore, data, loading } = useQuery(GET_POSTS_WITH_PAGINATION, {
    variables: {
      limit: 20,
      offset: 0,
      userId: user.id,
    },
    pollInterval: 300000,
  });
  console.log(data, 'sd');

  /* LIKE MUTATION */
  const [like_post] = useMutation(LIKE_POST, {
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
          userId: user.id,
          postId,
        },
      },
    });
  };

  const handleUnlike = (postId: string) => {
    unlike_post({
      variables: {
        userId: user.id,
        postId,
      },
    });
  };

  return (
    <div className="flex items-center flex-col flex-wrap gap-5 ">
      {data &&
        data?.getPostsWithPagination.map((post: PostResult) => (
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
      {data?.getPostsWithPagination.length >= 20 && (
        <button
          onClick={() => {
            fetchMore({
              variables: {
                offset: data?.getPostsWithPagination.length,
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

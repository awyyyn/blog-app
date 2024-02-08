import { useMutation, useQuery } from '@apollo/client';
import { Suspense, lazy, useState } from 'react';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';

import { userStore } from '../../store/userStore';
import { GET_POSTS_WITH_PAGINATION } from '../../gql/queries/post';
import { LIKE_POST, UNLIKE_POST } from '../../gql/mutations/post';
import { PostResult } from '../../gql-types/graphql';
const PostCard = lazy(() => import('../../components/post-card/post-card'));

export function Home() {
  const { user } = userStore();
  const { fetchMore, data, loading } = useQuery(GET_POSTS_WITH_PAGINATION, {
    variables: {
      limit: 20,
      offset: 0,
      userId: user.id as string,
    },
    pollInterval: 300000,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchedAllPosts, setIsFetchedAllPosts] = useState(false);

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
          userId: user.id as string,
          postId,
        },
      },
    });
  };

  const handleUnlike = (postId: string) => {
    unlike_post({
      variables: {
        userId: user.id as string,
        postId,
      },
    });
  };

  return (
    <div className="flex items-center flex-col flex-wrap gap-5 ">
      {data &&
        data?.getPostsWithPagination?.map((post) => (
          <Suspense key={post?.id} fallback={<PostCardSpinner />}>
            <PostCard
              handleLike={() => {
                if (post?.liked) {
                  handleUnlike(post?.id as string);
                } else {
                  handleLike(post?.id as string);
                }
              }}
              {...(post as PostResult)}
            />
          </Suspense>
        ))}
      {(data?.getPostsWithPagination?.length as number) >= 20 && (
        <button
          onClick={async () => {
            setIsLoading(true);
            fetchMore({
              variables: {
                offset: data?.getPostsWithPagination?.length,
              },
            }).then((data) => {
              if (data.data.getPostsWithPagination?.length === 0) {
                setIsLoading(false);
                setIsFetchedAllPosts(true);
              }
              return data;
            });
          }}
          disabled={isFetchedAllPosts || isLoading}
        >
          {!isFetchedAllPosts
            ? isLoading
              ? 'Loading...'
              : 'Load more'
            : 'No more posts'}
        </button>
      )}
    </div>
  );
}

export default Home;

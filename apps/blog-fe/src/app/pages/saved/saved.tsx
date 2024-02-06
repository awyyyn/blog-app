import { useMutation, useQuery } from '@apollo/client';
import { Suspense, lazy, useEffect, useState } from 'react';
import PostCardSpinner from '../../components/post-card-spinner/post-card-spinner';

import { PostResult } from '@blog-app/shared';
import { userStore } from '../../store/userStore';
import { SAVED_POST } from '../../gql/queries/post';
import { LIKE_POST, UNLIKE_POST, UNSAVE_POST } from '../../gql/mutations/post';
const SavedPostCard = lazy(
  () => import('../../components/saved-post-card/saved-post-card')
);

export function Saved() {
  const { user } = userStore();
  const [saved, setSaved] = useState<PostResult[]>();
  const { /* fetchMore, */ data, loading } = useQuery(SAVED_POST, {
    variables: {
      limit: 20,
      offset: 0,
      userId: user.id,
    },
    pollInterval: 30000,
  });

  useEffect(() => {
    if (data) {
      setSaved(data.savedPostsByUser);
    }
  }, [data]);

  /* LIKE MUTATION */
  const [like_post] = useMutation(LIKE_POST, {
    refetchQueries: [SAVED_POST, 'savedPostsByUser'],
  });
  const [unlike_post] = useMutation(UNLIKE_POST, {
    refetchQueries: [SAVED_POST, 'savedPostsByUser'],
  });
  const [unsave] = useMutation(UNSAVE_POST, {
    refetchQueries: [SAVED_POST, 'savedPostsByUser'],
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

  const handleUnsavePost = (postId: string) => {
    unsave({
      variables: {
        postId,
        userId: user.id,
      },
    });
  };

  return (
    <div className="flex items-center flex-col flex-wrap gap-5  ">
      {saved &&
        saved.map((post: PostResult) => (
          <Suspense key={post.id} fallback={<PostCardSpinner />}>
            <SavedPostCard
              handleUnsave={() => handleUnsavePost(post.id)}
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
    </div>
  );
}

export default Saved;

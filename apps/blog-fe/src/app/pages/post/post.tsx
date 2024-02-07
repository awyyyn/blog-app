import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
// import UserAvatar from '../../components/user-avatar/user-avatar';
import { Button, Divider, Input, Spinner, User } from '@nextui-org/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { VscSend } from 'react-icons/vsc';
import { Suspense, lazy, useEffect, useState } from 'react';
import { CommentsSpinner } from '../../components/comments/comments';
import { userStore } from '../../store/userStore';
import { SUBSCRIBE_COMMENT } from '../../gql/subscriptions/comment';
import { SUBSCRIBE_POST_LIKE } from '../../gql/subscriptions/post';
import { GET_COMMENTS } from '../../gql/queries/comment';
import { GET_POST } from '../../gql/queries/post';
import { LIKE_POST, UNLIKE_POST } from '../../gql/mutations/post';
import { ADD_COMMENT } from '../../gql/mutations/comment';
import { Comment } from '../../gql-types/graphql';
const Comments = lazy(() => import('../../components/comments/comments'));

export function Post() {
  const { user } = userStore();

  const params = useParams();
  const [comment, setComment] = useState('');
  const postInput = {
    userId: user.id as string,
    postId: params.id as string,
  };
  const [comments, setComments] = useState<Comment[]>([]);
  const [add_comment, { loading: adding_comment }] = useMutation(ADD_COMMENT);
  const [like_post] = useMutation(LIKE_POST, {
    variables: { likePostInput: postInput },
  });
  const [unlike_post] = useMutation(UNLIKE_POST, {
    variables: postInput,
  });
  const {
    data,
    loading,
    error,
    refetch: refetch_post,
  } = useQuery(GET_POST, {
    variables: postInput,
    onCompleted(data) {
      setCount({
        likes: data?.getPostById?._count?.liked_by,
        comments: data?.getPostById?._count?.comments,
      });
      setLiked(data?.getPostById?.liked as boolean);
    },
  });
  const [count, setCount] = useState({
    likes: data?.getPostById?._count?.liked_by,
    comments: data?.getPostById?._count?.comments,
  });
  const {
    data: comments_data,
    loading: comments_loading,
    error: comments_error,
    refetch: refetch_comments,
    fetchMore: fetchMore_comments,
  } = useQuery(GET_COMMENTS, {
    variables: {
      postId: postInput.postId,
      offset: 0,
    },
  });
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    refetch_post();
    refetch_comments();
  }, [params]);

  useEffect(() => {
    if (comments_data) {
      setComments(comments_data?.getCommentsByPostId as Comment[]);
    }
  }, [comments_data]);

  /* SUBSCRIBE COMMENT */
  useSubscription(SUBSCRIBE_COMMENT, {
    variables: { postId: postInput.postId },
    onData(options) {
      if (options.data?.error) return console.log(options);
      setCount((count) => ({
        ...count,
        comments: (count?.comments as number) + 1,
      }));
      setComments((pre) => [
        options.data?.data?.commentAdded as Comment,
        ...pre,
      ]);
    },
  });

  /* SUBSCRIBE LIKE/UNLIKE POST */
  useSubscription(SUBSCRIBE_POST_LIKE, {
    variables: { postId: postInput.postId },
    onData(options) {
      if (options.data?.error) return console.log(options);
      if (options.data?.data?.postLiked?.type === 'LIKE') {
        setCount((count) => ({
          ...count,
          likes: (count.likes as number) + 1,
        }));
      } else {
        setCount((count) => ({
          ...count,
          likes: (count.likes as number) - 1,
        }));
      }
    },
  });

  const handleAddComment = () => {
    add_comment({
      variables: {
        commentInput: {
          comment: comment,
          postId: params.id,
          userId: user.id,
        },
      },
    }).then(() => {
      setComment('');
    });
  };
  const handleLikePost = () => {
    if (liked) {
      setLiked(false);
      unlike_post().catch((err) => {
        setLiked(true);
      });
    } else {
      setLiked(true);
      like_post().catch((err) => {
        setLiked(false);
      });
    }
  };
  const handleFetchMore = () => {
    fetchMore_comments({
      variables: {
        offset: comments.length,
      },
    });
    console.log(comments_data, 'r');
  };

  if (loading) return <Spinner />;
  if (error || comments_error) return <p>Error: {error?.message}</p>;

  console.log(comments_data, 'e');
  return (
    <div className="px-4 lg:pr-[]">
      <div className="flex gap-x-3">
        <User
          name={`${data?.getPostById?.author?.firstname} ${data?.getPostById?.author?.lastname}`}
          description={data?.getPostById?.author?.username}
          avatarProps={{
            src: data?.getPostById?.author?.profile as string,
          }}
        />
      </div>
      <Divider className="my-4 bg-stone-100" />
      <div>
        <h1 className="font-bold text-xl">{data?.getPostById?.title}</h1>
        <p>{data?.getPostById?.description}</p>
      </div>
      <div className="flex gap-x-3 mt-2">
        <div className="flex items-center">
          <Button
            variant="light"
            isIconOnly
            className="bg-none border-none hover:bg-none"
            radius="full"
            size="md"
            onClick={handleLikePost}
          >
            {liked ? (
              <AiFillHeart
                color="#ff0000"
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            ) : (
              <AiOutlineHeart
                color="#00000090"
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            )}
          </Button>
          <p className="font-semibold text-default-400  ">{count.likes}</p>
          <p className="ml-2 text-default-400 ">Likes</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-default-400  ">{count.comments}</p>
          <p className="ml-2 text-default-400  ">Comments</p>
        </div>
      </div>
      <Divider className="mb-4 bg-stone-200" />
      <div className="flex w-full items-baseline  md:flex-nowrap    ">
        <User
          name
          avatarProps={{
            size: 'sm',
            src: user.profile as string,
          }}
        />
        <Input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment..."
          isReadOnly={adding_comment}
          onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
          endContent={
            <Button
              isIconOnly
              variant="flat"
              isLoading={adding_comment}
              onClick={handleAddComment}
              className="bg-secondary-100 hover:bg-secondary-500 focus:bg-secondary-500 focus:text-white hover:text-white"
            >
              <VscSend />
            </Button>
          }
        />
      </div>
      {comments_loading ? (
        <CommentsSpinner />
      ) : (
        <Suspense fallback={<CommentsSpinner />}>
          <Comments profile={user.profile as string} comments={comments} />
        </Suspense>
      )}
      {data?.getPostById?._count?.comments !==
        comments_data?.getCommentsByPostId?.length &&
        (comments_data?.getCommentsByPostId?.length as number) >= 10 && (
          <Button
            className="mt-5 mx-auto block"
            fullWidth
            variant="light"
            onClick={handleFetchMore}
            isLoading={comments_loading}
          >
            See more comments
          </Button>
        )}
    </div>
  );
}

export default Post;

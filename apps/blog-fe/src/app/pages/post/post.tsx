import styles from './post.module.css';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
import UserAvatar from '../../components/user-avatar/user-avatar';
import { Button, Divider, Input } from '@nextui-org/react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { VscSend } from 'react-icons/vsc';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Comment as CommentType } from '@blog-app/shared';
import {
  ADD_COMMENT,
  GET_COMMENTS,
  GET_POST,
  LIKE_POST,
  SUBSCRIBE_COMMENT,
  SUBSCRIBE_POST_LIKE,
  UNLIKE_POST,
} from '../../queries/queries';
import { CommentsSpinner } from '../../components/comments/comments';
const Comments = lazy(() => import('../../components/comments/comments'));

export function Post() {
  const params = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentType[]>([]);
  const [likes, setLikes] = useState(0);
  const [add_comment, { loading: adding_comment }] = useMutation(ADD_COMMENT);

  /* SUBSCRIBE COMMENT */
  useSubscription(SUBSCRIBE_COMMENT, {
    variables: { postid: params.id },
    onData(options) {
      if (options.data.error) return console.log(options);

      setComments((prevComment) => [
        options.data.data.commentAdded,
        ...prevComment,
      ]);
    },
  });

  /* SUBSCRIBE LIKE/UNLIKE POST */
  useSubscription(SUBSCRIBE_POST_LIKE, {
    variables: { postId: params.id },
    onData(options) {
      if (options.data.error) return console.log(options);
      if (options.data.data.postLiked.type === 'LIKE') {
        setLikes((likes) => likes + 1);
      } else {
        setLikes((likes) => likes - 1);
      }
    },
  });

  /* GET COMMENTS */
  const {
    fetchMore,
    data: comments_data,
    loading: loading_comments,
  } = useQuery(GET_COMMENTS, {
    variables: { postId: params.id, offset: 0 },
    onError(error) {
      console.group(error);
    },
  });

  /* GET POST */
  const { data, loading } = useQuery(GET_POST, {
    variables: {
      id: params.id,
    },
    onCompleted(data) {
      setLiked(data.getLikedPostByPostId.exists);
      setLikes(data.getPostById._count.liked_by);
    },
  });

  /* LIKE MUTATION */
  const [like_post, { data: liked_data }] = useMutation(LIKE_POST);
  const [unlike_post] = useMutation(UNLIKE_POST);

  useEffect(() => {
    if (comments_data) {
      setComments(comments_data.getCommentsByPostId);
    }
  }, [comments_data]);

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        offset: comments.length,
      },
    });
  };

  const handleAddComment = async () => {
    if (!comment) return;
    await add_comment({
      variables: {
        commentInput: {
          /* temporary */
          userId: '65af33af1f968b8d0aaa174b',
          postId: params.id,
          comment: comment,
        },
      },
    });
    setComment('');
  };

  const handleLikePost = () => {
    if (!liked) {
      like_post({
        variables: {
          likePostInput: {
            userId: '65af33af1f968b8d0aaa174b',
            postId: params.id,
          },
        },
      });
      setLiked(true);
    } else {
      unlike_post({
        variables: {
          liked_post_id: liked_data
            ? liked_data.likePost.id
            : data.getLikedPostByPostId.liked_post_id,
        },
      });
      setLiked(false);
    }
  };

  if (loading) return <h1>loadingg...</h1>;

  return (
    <div className={styles['container']}>
      <div className="flex gap-x-3">
        <UserAvatar />
        <div className="-space-y-1">
          <h4 className="text-small font-semibold leading-none text-default-600">
            {data.getPostById.author.firstname}{' '}
            {data.getPostById.author.lastname}
          </h4>
          <h5 className="text-small tracking-tight text-default-400">
            {data.getPostById.author.username}
          </h5>
        </div>
      </div>
      <Divider className="my-4 bg-stone-100" />
      <div>
        <h1 className="font-bold text-xl">{data.getPostById.title}</h1>
        <p>{data.getPostById.description}</p>
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
          <p className="font-semibold text-default-400  ">{likes}</p>
          <p className="ml-2 text-default-400 ">Likes</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-default-400  ">
            {data.getPostById._count.comments}
          </p>
          <p className="ml-2 text-default-400  ">Comments</p>
        </div>
      </div>
      <Divider className="mb-4 bg-stone-200" />
      <div className="flex w-full   md:flex-nowrap mb-6 md:mb-0 gap-4">
        <UserAvatar size="sm" />
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
      <Suspense fallback={<CommentsSpinner />}>
        <Comments comments={comments} />
      </Suspense>
      {data.getPostById._count.comments !==
        comments_data?.getCommentsByPostId.length &&
        comments_data?.getCommentsByPostId.length >= 10 && (
          <Button
            className="mt-5 mx-auto block"
            fullWidth
            variant="light"
            onClick={handleFetchMore}
            isLoading={loading_comments}
          >
            See more comments
          </Button>
        )}
    </div>
  );
}

export default Post;

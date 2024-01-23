import gql from 'graphql-tag';
import styles from './post.module.css';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import UserAvatar from '../../components/user-avatar/user-avatar';
import { Button, Divider, Input } from '@nextui-org/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { VscSend } from 'react-icons/vsc';
import { useState } from 'react';
import { Comment as CommentType } from '@blog-app/shared';
import Comment from '../../components/comment/comment';

/* eslint-disable-next-line */
export interface PostProps {}

const GET_POST = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      id
      description
      title
      author {
        username
        firstname
        lastname
      }
      comments {
        id
        comment
        user {
          firstname
          lastname
        }
      }
      likes
      createdAt
      updatedAt
    }
  }
`;

const ADD_COMMENT = gql`
  mutation CreateComment($commentInput: commentInput) {
    createComment(commentInput: $commentInput) {
      id
      comment
      user {
        firstname
        lastname
      }
    }
  }
`;

export function Post(props: PostProps) {
  const params = useParams();
  const [comment, setComment] = useState('');
  const [add_comment, { data: comment_data, loading: adding_comment }] =
    useMutation(ADD_COMMENT, {
      refetchQueries: [GET_POST, 'GetPostById'],
    });

  const { data, loading } = useQuery(GET_POST, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return;
  console.log(comment_data);
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

  return (
    <div className={styles['container']}>
      <div className="flex gap-x-3">
        <UserAvatar />
        <div>
          <h1>{data.getPostById.author.username}</h1>
        </div>
      </div>
      <Divider className="my-4 bg-stone-100" />
      <div>
        <h1 className="font-bold text-xl">{data.getPostById.title}</h1>
        <p>{data.getPostById.description}</p>
      </div>
      <div className="flex gap-x-3">
        <div className="flex items-center">
          <Button
            variant="light"
            isIconOnly
            className="bg-none border-none hover:bg-none"
            radius="full"
            size="md"
          >
            <AiOutlineHeart
              color="#ff0000"
              height={40}
              scale={1.5}
              width={40}
            />
          </Button>
          <p className="font-semibold text-default-400 text-small">
            {data.getPostById.likes}
          </p>
          <p className="ml-2 text-default-400 text-small">Likes</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-default-400 text-small">
            {data.getPostById.comments.count}
          </p>
          <p className="ml-2 text-default-400 text-small">Likes</p>
        </div>
      </div>
      <Divider className="my-4 bg-stone-100" />
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
      <div className="space-y-5 mt-5">
        {data.getPostById.comments.map((comment: CommentType) => (
          <Comment
            key={comment.id}
            comment={comment.comment}
            name={`${comment?.user?.firstname} ${comment?.user?.lastname}`}
            // name={'asd'}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;

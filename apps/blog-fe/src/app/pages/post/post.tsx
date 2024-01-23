import gql from 'graphql-tag';
import styles from './post.module.css';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import UserAvatar from '../../components/user-avatar/user-avatar';
import { Divider } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface PostProps {}

const GET_POST = gql`
  query GetPostById($id: String!) {
    getPostById(id: $id) {
      id
      description
      author {
        username
      }
      comments {
        user {
          username
        }
      }
      likes
      createdAt
      updatedAt
    }
  }
`;

export function Post(props: PostProps) {
  const params = useParams();

  console.log(params);

  const { data, loading } = useQuery(GET_POST, {
    variables: {
      id: params.id,
    },
  });

  if (loading) return;
  console.log(data);

  return (
    <div className={styles['container']}>
      <div className="flex gap-x-3">
        <UserAvatar />
        <div>
          <h1>{data.getPostById.author.username}</h1>
        </div>
      </div>
      <Divider className="my-4" />
      <h1>{data.getPostById.description}</h1>
    </div>
  );
}

export default Post;

// import styles from './post-card.module.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PostCardProps {
  author: {
    username: string;
    id: string;
    firstname: string;
    lastname: string;
  };
  id: string;
  description: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export function PostCard({
  author,
  createdAt,
  description,
  id,
  likes,
  updatedAt,
}: PostCardProps) {
  const [isFollowed, setIsFollowed] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/post/${id}`);

  return (
    <Card
      className="w-[340px] sm:w-[440px] lg:min-w-[740px] md:min-w-[540px]"
      isPressable
      onClick={handleNavigate}
      shadow="sm"
      radius="sm"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {author.firstname} {author.lastname}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {author.username}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{description}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1 items-center">
          <Button
            variant="light"
            isIconOnly
            className="bg-none border-none hover:bg-none"
            radius="full"
            size="sm"
          >
            <AiOutlineHeart
              color="#ff0000"
              height={40}
              scale={1.5}
              width={40}
            />
          </Button>
          <p className="font-semibold text-default-400 text-small">{likes}</p>
          <p className="text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">0</p>
          <p className="text-default-400 text-small">Comments</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PostCard;

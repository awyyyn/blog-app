// import styles from './post-card.module.css';
import { PaginationResult } from '@blog-app/shared';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Tooltip,
} from '@nextui-org/react';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { SAVE_POST, UNSAVE_POST } from '../../queries/queries';
import { useMutation } from '@apollo/client';
import { userStore } from '../../store/userStore';
// import { useMutation } from '@apollo/client';

/* eslint-disable-next-line */

interface PostCardProps extends PaginationResult {
  handleLike: (/* userId: string, postId: string */) => void;
  // handleUnLike: (userId: string, postId: string) => void;
}

export function PostCard({
  createdAt,
  id,
  title,
  updatedAt,
  _count,
  description,
  author,
  handleLike,
  liked,
  saved,
}: PostCardProps) {
  const { user } = userStore();
  const [isSaved, setIsSaved] = useState(saved);
  const navigate = useNavigate();
  const [save_post] = useMutation(SAVE_POST, {
    variables: {
      userId: user.id,
      postId: id,
    },
  });
  const [unsave_post] = useMutation(UNSAVE_POST, {
    variables: {
      userId: user.id,
      postId: id,
    },
  });

  const handleNavigate = () => navigate(`/post/${id}`);
  const handleSave = () => {
    if (isSaved) {
      unsave_post()
        .then((data) => {
          // post saved
          console.log(data);
          setIsSaved(false);
        })
        .catch((err) => {
          // saving post error
          console.log(err);
        });
    } else {
      save_post()
        .then((data) => {
          // post saved
          setIsSaved(true);
          console.log(data);
        })
        .catch((err) => {
          // saving post error
          console.log(err);
        });
    }
  };

  return (
    <Card
      className="w-[340px] sm:w-[440px] lg:min-w-[740px] md:min-w-[540px]"
      isPressable
      onClick={handleNavigate}
      shadow="sm"
      radius="sm"
    >
      <CardHeader className="justify-between relative">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={author?.profile ?? ''}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {author?.firstname} {author?.lastname}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {author?.username}
            </h5>
          </div>
        </div>

        <Tooltip
          color="secondary"
          placement="bottom-end"
          content={isSaved ? 'Unsave post?' : 'Save post?'}
          offset={1}
        >
          <Button
            className="absolute  -top-2 p-1 hover:bg-none -right-1 m-0  "
            isIconOnly
            size="md"
            variant="light"
            onPress={handleSave}
          >
            {isSaved ? (
              <IoBookmark className="h-9 fill-purple-600 w-9" />
            ) : (
              <IoBookmarkOutline className="h-9 stroke-purple-600 w-9" />
            )}
          </Button>
        </Tooltip>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <h1 className="font-bold">{title}</h1>
        <p>{String(description).substring(0, 140)}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1 items-center">
          <Button
            variant="light"
            isIconOnly
            className="bg-none border-none hover:bg-none"
            radius="full"
            size="sm"
            onPress={handleLike}
          >
            {liked ? (
              <AiFillHeart
                color="#ff0000"
                style={{
                  width: 18,
                  height: 18,
                }}
              />
            ) : (
              <AiOutlineHeart
                color="#00000090"
                style={{
                  width: 18,
                  height: 18,
                }}
              />
            )}
          </Button>
          <p className="font-semibold text-default-400 text-small">
            {_count?.liked_by}
          </p>
          <p className="text-default-400 text-small">Likes</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {_count?.comments}
          </p>
          <p className="text-default-400 text-small">Comments</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PostCard;

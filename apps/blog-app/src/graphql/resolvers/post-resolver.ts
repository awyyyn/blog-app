import { GraphQLError } from 'graphql';
import { prisma } from '../../prisma';
import { LikePostInput, PostInput } from '@blog-app/shared';
import pubsub from '../pubsub';

export const getPostsResolver = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        _count: true,
        // comments: true,
      },
    });
    return posts;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const createPostResolver = async (
  _,
  { postInput }: { postInput: PostInput }
) => {
  const { description, title, userId } = postInput;
  try {
    const post = await prisma.post.create({
      data: {
        author: {
          connect: { id: userId },
        },
        title,
        description,
      },
    });

    pubsub.publish('POST_CREATED', {
      postCreated: post,
    });

    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getPostByIdResolver = async (_, { id }: { id: string }) => {
  try {
    const post = await prisma.post.findFirst({
      where: { id },
      include: {
        author: true,
        comments: true,
        _count: true,
      },
    });
    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const getPostsWithPaginationResolver = async (
  _,
  { limit, offset, userId }: { offset: number; limit: number; userId: string }
) => {
  try {
    const posts = await prisma.post.findMany({
      skip: offset,
      take: limit,
      include: {
        liked_by: {
          select: {
            userId: true,
          },
        },
        author: true,
        _count: true,
      },
    });

    return posts.flatMap((post) => {
      const liked = post.liked_by.find((i) => i.userId === userId);

      return {
        ...post,
        liked: Boolean(liked),
      };
    });
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};

export const likePostResolver = async (
  _,
  { likePostInput }: { likePostInput: LikePostInput }
) => {
  try {
    // const post = await prisma.user.update({});
    console.log(likePostInput);
    const like_post = await prisma.postLikes.create({
      data: {
        user: {
          connect: { id: likePostInput.userId },
        },
        post: {
          connect: { id: likePostInput.postId },
        },
      },
      include: {
        post: true,
        user: true,
      },
    });

    pubsub.publish('POST_LIKED', {
      postLiked: {
        type: 'LIKE',
        postId: like_post.postId,
      },
    });

    return like_post;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};

export const getTotalLikesByPostIdResolver = async (
  _,
  { postId }: { postId: string }
) => {
  try {
    const total_likes = await prisma.postLikes.aggregate({
      where: {
        postId,
      },
      _count: true,
    });
    return total_likes;
  } catch (error) {
    console.log(error.message);
    throw new GraphQLError(error);
  }
};

export const getLikedPostByPostIdResolver = async (
  _,
  { postId }: { postId: string }
) => {
  try {
    const data = await prisma.postLikes.findFirst({
      where: {
        postId: postId,
      },
    });

    if (data) {
      return {
        exists: Boolean(data),
        liked_post_id: data.id,
      };
    } else {
      return {
        exists: Boolean(data),
      };
    }
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const unlikePostResolver = async (
  _,
  { userId, postId }: { userId: string; postId: string }
) => {
  console.log(userId, postId);
  try {
    const getById = await prisma.postLikes.findFirst({
      where: {
        userId,
        postId,
      },
    });

    const unliked_post = await prisma.postLikes.delete({
      where: { id: getById.id },
    });

    pubsub.publish('POST_LIKED', {
      postLiked: {
        type: 'UNLIKE',
        postId: unliked_post.postId,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    throw new GraphQLError(error);
  }
};

export const savePostResolver = async (
  _,
  { postId, userId }: { userId: string; postId: string }
) => {
  try {
    const post = await prisma.savedPost.create({
      data: {
        postId,
        userId,
      },
    });

    return post;
  } catch (error) {
    throw new GraphQLError(error);
  }
};

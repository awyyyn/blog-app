/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateComment($commentInput: commentInput) {\n    createComment(commentInput: $commentInput) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n      }\n    }\n  }\n": types.CreateCommentDocument,
    "\n  mutation UnsavePost($userId: ID!, $postId: ID!) {\n    unsavePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n": types.UnsavePostDocument,
    "\n  mutation SavePost($postId: ID!, $userId: ID!) {\n    savePost(postId: $postId, userId: $userId) {\n      id\n    }\n  }\n": types.SavePostDocument,
    "\n  mutation CreatePost($postInput: postInput) {\n    createPost(postInput: $postInput) {\n      id\n      description\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation UnlikePost($postId: ID!, $userId: ID!) {\n    unlikePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n": types.UnlikePostDocument,
    "\n  mutation LikePost($likePostInput: likePostInput) {\n    likePost(likePostInput: $likePostInput) {\n      id\n    }\n  }\n": types.LikePostDocument,
    "\n  query GetCommentsByPostId($postId: ID!, $offset: Int) {\n    getCommentsByPostId(postId: $postId, offset: $offset) {\n      comment\n      user {\n        firstname\n        lastname\n        username\n      }\n      id\n    }\n  }\n": types.GetCommentsByPostIdDocument,
    "\n  query GetPostById($postId: ID!, $userId: ID) {\n    getPostById(id: $postId, userId: $userId) {\n      author {\n        firstname\n        lastname\n        username\n        profile\n      }\n      createdAt\n      title\n      id\n      liked\n      description\n      _count {\n        comments\n        liked_by\n      }\n    }\n  }\n": types.GetPostByIdDocument,
    "\n  query GetPostsWithPagination($offset: Int, $limit: Int, $userId: ID!) {\n    getPostsWithPagination(offset: $offset, limit: $limit, userId: $userId) {\n      _count {\n        liked_by\n        comments\n      }\n      id\n      liked\n      description\n      updatedAt\n      createdAt\n      saved\n      title\n      author {\n        profile\n        firstname\n        lastname\n        username\n      }\n    }\n  }\n": types.GetPostsWithPaginationDocument,
    "\n  query SavedPostsByUser($userId: ID!) {\n    savedPostsByUser(userId: $userId) {\n      description\n      title\n      id\n      _count {\n        comments\n        liked_by\n      }\n      author {\n        username\n        profile\n        firstname\n        lastname\n      }\n      createdAt\n      liked\n    }\n  }\n": types.SavedPostsByUserDocument,
    "\n  query Query($query: String) {\n    searchUser(query: $query) {\n      data {\n        firstname\n        lastname\n        id\n        username\n        profile\n      }\n      count\n    }\n  }\n": types.QueryDocument,
    "\n  query GetNotFollowedUser($userId: ID!) {\n    getNotFollowedUser(userId: $userId) {\n      id\n      lastname\n      firstname\n      username\n      profile\n      _count {\n        following\n        followedBy\n      }\n    }\n  }\n": types.GetNotFollowedUserDocument,
    "\n  subscription Subscription($postId: ID!) {\n    commentAdded(postId: $postId) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n        username\n        profile\n      }\n    }\n  }\n": types.SubscriptionDocument,
    "\n  subscription PostLiked($postId: ID!) {\n    postLiked(postId: $postId) {\n      postId\n      type\n    }\n  }\n": types.PostLikedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateComment($commentInput: commentInput) {\n    createComment(commentInput: $commentInput) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateComment($commentInput: commentInput) {\n    createComment(commentInput: $commentInput) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnsavePost($userId: ID!, $postId: ID!) {\n    unsavePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UnsavePost($userId: ID!, $postId: ID!) {\n    unsavePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SavePost($postId: ID!, $userId: ID!) {\n    savePost(postId: $postId, userId: $userId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation SavePost($postId: ID!, $userId: ID!) {\n    savePost(postId: $postId, userId: $userId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreatePost($postInput: postInput) {\n    createPost(postInput: $postInput) {\n      id\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($postInput: postInput) {\n    createPost(postInput: $postInput) {\n      id\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnlikePost($postId: ID!, $userId: ID!) {\n    unlikePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikePost($postId: ID!, $userId: ID!) {\n    unlikePost(userId: $userId, postId: $postId) {\n      status\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LikePost($likePostInput: likePostInput) {\n    likePost(likePostInput: $likePostInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation LikePost($likePostInput: likePostInput) {\n    likePost(likePostInput: $likePostInput) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCommentsByPostId($postId: ID!, $offset: Int) {\n    getCommentsByPostId(postId: $postId, offset: $offset) {\n      comment\n      user {\n        firstname\n        lastname\n        username\n      }\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsByPostId($postId: ID!, $offset: Int) {\n    getCommentsByPostId(postId: $postId, offset: $offset) {\n      comment\n      user {\n        firstname\n        lastname\n        username\n      }\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostById($postId: ID!, $userId: ID) {\n    getPostById(id: $postId, userId: $userId) {\n      author {\n        firstname\n        lastname\n        username\n        profile\n      }\n      createdAt\n      title\n      id\n      liked\n      description\n      _count {\n        comments\n        liked_by\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostById($postId: ID!, $userId: ID) {\n    getPostById(id: $postId, userId: $userId) {\n      author {\n        firstname\n        lastname\n        username\n        profile\n      }\n      createdAt\n      title\n      id\n      liked\n      description\n      _count {\n        comments\n        liked_by\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPostsWithPagination($offset: Int, $limit: Int, $userId: ID!) {\n    getPostsWithPagination(offset: $offset, limit: $limit, userId: $userId) {\n      _count {\n        liked_by\n        comments\n      }\n      id\n      liked\n      description\n      updatedAt\n      createdAt\n      saved\n      title\n      author {\n        profile\n        firstname\n        lastname\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsWithPagination($offset: Int, $limit: Int, $userId: ID!) {\n    getPostsWithPagination(offset: $offset, limit: $limit, userId: $userId) {\n      _count {\n        liked_by\n        comments\n      }\n      id\n      liked\n      description\n      updatedAt\n      createdAt\n      saved\n      title\n      author {\n        profile\n        firstname\n        lastname\n        username\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SavedPostsByUser($userId: ID!) {\n    savedPostsByUser(userId: $userId) {\n      description\n      title\n      id\n      _count {\n        comments\n        liked_by\n      }\n      author {\n        username\n        profile\n        firstname\n        lastname\n      }\n      createdAt\n      liked\n    }\n  }\n"): (typeof documents)["\n  query SavedPostsByUser($userId: ID!) {\n    savedPostsByUser(userId: $userId) {\n      description\n      title\n      id\n      _count {\n        comments\n        liked_by\n      }\n      author {\n        username\n        profile\n        firstname\n        lastname\n      }\n      createdAt\n      liked\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Query($query: String) {\n    searchUser(query: $query) {\n      data {\n        firstname\n        lastname\n        id\n        username\n        profile\n      }\n      count\n    }\n  }\n"): (typeof documents)["\n  query Query($query: String) {\n    searchUser(query: $query) {\n      data {\n        firstname\n        lastname\n        id\n        username\n        profile\n      }\n      count\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetNotFollowedUser($userId: ID!) {\n    getNotFollowedUser(userId: $userId) {\n      id\n      lastname\n      firstname\n      username\n      profile\n      _count {\n        following\n        followedBy\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNotFollowedUser($userId: ID!) {\n    getNotFollowedUser(userId: $userId) {\n      id\n      lastname\n      firstname\n      username\n      profile\n      _count {\n        following\n        followedBy\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription Subscription($postId: ID!) {\n    commentAdded(postId: $postId) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n        username\n        profile\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription Subscription($postId: ID!) {\n    commentAdded(postId: $postId) {\n      id\n      comment\n      user {\n        firstname\n        lastname\n        username\n        profile\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription PostLiked($postId: ID!) {\n    postLiked(postId: $postId) {\n      postId\n      type\n    }\n  }\n"): (typeof documents)["\n  subscription PostLiked($postId: ID!) {\n    postLiked(postId: $postId) {\n      postId\n      type\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
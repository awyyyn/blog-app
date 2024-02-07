/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type LikedPostResult = {
  __typename?: 'LikedPostResult';
  exists?: Maybe<Scalars['Boolean']['output']>;
  liked_post_id?: Maybe<Scalars['ID']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createPost: Post;
  createUser: User;
  followUser?: Maybe<Result>;
  likePost?: Maybe<Post>;
  removeFollowedUser?: Maybe<Result>;
  removeFollowerUser?: Maybe<Result>;
  savePost?: Maybe<Array<Maybe<Post>>>;
  unlikePost?: Maybe<Result>;
  unsavePost?: Maybe<Result>;
};


export type MutationCreateCommentArgs = {
  commentInput?: InputMaybe<CommentInput>;
};


export type MutationCreatePostArgs = {
  postInput?: InputMaybe<PostInput>;
};


export type MutationCreateUserArgs = {
  userInput?: InputMaybe<UserInput>;
};


export type MutationFollowUserArgs = {
  followId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLikePostArgs = {
  likePostInput?: InputMaybe<LikePostInput>;
};


export type MutationRemoveFollowedUserArgs = {
  unfollowUserId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationRemoveFollowerUserArgs = {
  followerUserId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationSavePostArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUnlikePostArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationUnsavePostArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCountsArrayFields>;
  author?: Maybe<User>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liked_by?: Maybe<Array<Maybe<User>>>;
  likes?: Maybe<Scalars['Int']['output']>;
  saved_by?: Maybe<Array<Maybe<User>>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PostCountsArrayFields = {
  __typename?: 'PostCountsArrayFields';
  comments?: Maybe<Scalars['Int']['output']>;
  liked_by?: Maybe<Scalars['Int']['output']>;
  saved_by?: Maybe<Scalars['Int']['output']>;
};

export type PostResult = {
  __typename?: 'PostResult';
  _count?: Maybe<PostCountsArrayFields>;
  author?: Maybe<User>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liked?: Maybe<Scalars['Boolean']['output']>;
  liked_by?: Maybe<Array<Maybe<User>>>;
  saved?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCommentsByPostId?: Maybe<Array<Maybe<Comment>>>;
  getLikedPostsByUser?: Maybe<Array<Maybe<Post>>>;
  getNotFollowedUser?: Maybe<Array<Maybe<User>>>;
  getPostById?: Maybe<PostResult>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getPostsWithPagination?: Maybe<Array<Maybe<PostResult>>>;
  getTotalLikesByPostId?: Maybe<PostCountsArrayFields>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  savedPostsByUser?: Maybe<Array<Maybe<PostResult>>>;
  searchUser?: Maybe<SearchResult>;
};


export type QueryGetCommentsByPostIdArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
};


export type QueryGetLikedPostsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetNotFollowedUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetPostsWithPaginationArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};


export type QueryGetTotalLikesByPostIdArgs = {
  postId: Scalars['ID']['input'];
};


export type QuerySavedPostsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QuerySearchUserArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};

export type Result = {
  __typename?: 'Result';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded: Comment;
  postCreated?: Maybe<Post>;
  postLiked?: Maybe<PostLiked>;
};


export type SubscriptionCommentAddedArgs = {
  postId: Scalars['ID']['input'];
};


export type SubscriptionPostLikedArgs = {
  postId: Scalars['ID']['input'];
};

export enum Type {
  Like = 'LIKE',
  Unlike = 'UNLIKE'
}

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCountsArrayFields>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  followedBy?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id?: Maybe<Scalars['ID']['output']>;
  lastname: Scalars['String']['output'];
  liked_posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Scalars['String']['output']>;
  saved_posts?: Maybe<Array<Maybe<Post>>>;
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserCountsArrayFields = {
  __typename?: 'UserCountsArrayFields';
  Post?: Maybe<Scalars['Int']['output']>;
  comments?: Maybe<Scalars['Int']['output']>;
  followedBy?: Maybe<Scalars['Int']['output']>;
  following?: Maybe<Scalars['Int']['output']>;
  save_post?: Maybe<Scalars['Int']['output']>;
};

export type CommentInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type LikePostInput = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type PostInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type PostLiked = {
  __typename?: 'postLiked';
  postId: Scalars['ID']['output'];
  type?: Maybe<Type>;
};

export type SavedPost = {
  __typename?: 'savedPost';
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type SearchResult = {
  __typename?: 'searchResult';
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<User>>>;
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateCommentMutationVariables = Exact<{
  commentInput?: InputMaybe<CommentInput>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, comment: string, user?: { __typename?: 'User', firstname: string, lastname: string } | null } };

export type UnsavePostMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type UnsavePostMutation = { __typename?: 'Mutation', unsavePost?: { __typename?: 'Result', status?: number | null, message?: string | null } | null };

export type SavePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type SavePostMutation = { __typename?: 'Mutation', savePost?: Array<{ __typename?: 'Post', id: string } | null> | null };

export type CreatePostMutationVariables = Exact<{
  postInput?: InputMaybe<PostInput>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, description?: string | null } };

export type UnlikePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type UnlikePostMutation = { __typename?: 'Mutation', unlikePost?: { __typename?: 'Result', status?: number | null, message?: string | null } | null };

export type LikePostMutationVariables = Exact<{
  likePostInput?: InputMaybe<LikePostInput>;
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost?: { __typename?: 'Post', id: string } | null };

export type RemoveFollowedUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  unfollowUserId: Scalars['ID']['input'];
}>;


export type RemoveFollowedUserMutation = { __typename?: 'Mutation', removeFollowedUser?: { __typename?: 'Result', message?: string | null, status?: number | null } | null };

export type FollowUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  followId: Scalars['ID']['input'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: { __typename?: 'Result', status?: number | null, message?: string | null } | null };

export type RemoveFollowerUserMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  followerUserId: Scalars['ID']['input'];
}>;


export type RemoveFollowerUserMutation = { __typename?: 'Mutation', removeFollowerUser?: { __typename?: 'Result', status?: number | null, message?: string | null } | null };

export type GetCommentsByPostIdQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCommentsByPostIdQuery = { __typename?: 'Query', getCommentsByPostId?: Array<{ __typename?: 'Comment', comment: string, id: string, user?: { __typename?: 'User', firstname: string, lastname: string, username: string } | null } | null> | null };

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetPostByIdQuery = { __typename?: 'Query', getPostById?: { __typename?: 'PostResult', createdAt: string, title: string, id: string, liked?: boolean | null, description?: string | null, author?: { __typename?: 'User', firstname: string, lastname: string, username: string, profile?: string | null } | null, _count?: { __typename?: 'PostCountsArrayFields', comments?: number | null, liked_by?: number | null } | null } | null };

export type GetPostsWithPaginationQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
}>;


export type GetPostsWithPaginationQuery = { __typename?: 'Query', getPostsWithPagination?: Array<{ __typename?: 'PostResult', id: string, liked?: boolean | null, description?: string | null, updatedAt: string, createdAt: string, saved?: boolean | null, title: string, _count?: { __typename?: 'PostCountsArrayFields', liked_by?: number | null, comments?: number | null } | null, author?: { __typename?: 'User', profile?: string | null, firstname: string, lastname: string, username: string } | null } | null> | null };

export type SavedPostsByUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type SavedPostsByUserQuery = { __typename?: 'Query', savedPostsByUser?: Array<{ __typename?: 'PostResult', description?: string | null, title: string, id: string, createdAt: string, liked?: boolean | null, _count?: { __typename?: 'PostCountsArrayFields', comments?: number | null, liked_by?: number | null } | null, author?: { __typename?: 'User', username: string, profile?: string | null, firstname: string, lastname: string } | null } | null> | null };

export type QueryQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type QueryQuery = { __typename?: 'Query', searchUser?: { __typename?: 'searchResult', count?: number | null, data?: Array<{ __typename?: 'User', firstname: string, lastname: string, id?: string | null, username: string, profile?: string | null } | null> | null } | null };

export type GetNotFollowedUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetNotFollowedUserQuery = { __typename?: 'Query', getNotFollowedUser?: Array<{ __typename?: 'User', id?: string | null, lastname: string, firstname: string, username: string, profile?: string | null, _count?: { __typename?: 'UserCountsArrayFields', following?: number | null, followedBy?: number | null } | null } | null> | null };

export type SubscriptionSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type SubscriptionSubscription = { __typename?: 'Subscription', commentAdded: { __typename?: 'Comment', id: string, comment: string, user?: { __typename?: 'User', firstname: string, lastname: string, username: string, profile?: string | null } | null } };

export type PostLikedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostLikedSubscription = { __typename?: 'Subscription', postLiked?: { __typename?: 'postLiked', postId: string, type?: Type | null } | null };


export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"commentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const UnsavePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnsavePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unsavePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UnsavePostMutation, UnsavePostMutationVariables>;
export const SavePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SavePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SavePostMutation, SavePostMutationVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"postInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const UnlikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnlikePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unlikePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UnlikePostMutation, UnlikePostMutationVariables>;
export const LikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likePostInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"likePostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"likePostInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likePostInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const RemoveFollowedUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFollowedUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unfollowUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFollowedUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"unfollowUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unfollowUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<RemoveFollowedUserMutation, RemoveFollowedUserMutationVariables>;
export const FollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"followId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const RemoveFollowerUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFollowerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"followerUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFollowerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"followerUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"followerUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<RemoveFollowerUserMutation, RemoveFollowerUserMutationVariables>;
export const GetCommentsByPostIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsByPostId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCommentsByPostId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetCommentsByPostIdQuery, GetCommentsByPostIdQueryVariables>;
export const GetPostByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"liked"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"liked_by"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostsWithPaginationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsWithPagination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPostsWithPagination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liked_by"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"liked"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"saved"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsWithPaginationQuery, GetPostsWithPaginationQueryVariables>;
export const SavedPostsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SavedPostsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savedPostsByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"liked_by"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"liked"}}]}}]}}]} as unknown as DocumentNode<SavedPostsByUserQuery, SavedPostsByUserQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetNotFollowedUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNotFollowedUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNotFollowedUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"followedBy"}}]}}]}}]}}]} as unknown as DocumentNode<GetNotFollowedUserQuery, GetNotFollowedUserQueryVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Subscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commentAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"profile"}}]}}]}}]}}]} as unknown as DocumentNode<SubscriptionSubscription, SubscriptionSubscriptionVariables>;
export const PostLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"PostLiked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postLiked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<PostLikedSubscription, PostLikedSubscriptionVariables>;
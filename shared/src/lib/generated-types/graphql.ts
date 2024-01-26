/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Comment = {
  __typename?: 'Comment';
  _count?: Maybe<Count>;
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type Count = {
  __typename?: 'Count';
  comments?: Maybe<Scalars['Int']['output']>;
  liked_by?: Maybe<Scalars['Int']['output']>;
  liked_posts?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createPost: Post;
  createUser: User;
  likePost?: Maybe<PostLikes>;
  unlikePost?: Maybe<PostLikes>;
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

export type MutationLikePostArgs = {
  likePostInput?: InputMaybe<LikePostInput>;
};

export type MutationUnlikePostArgs = {
  id: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<Count>;
  author?: Maybe<User>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liked_by?: Maybe<Array<Maybe<PostLikes>>>;
  likes?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type PostLikes = {
  __typename?: 'PostLikes';
  id: Scalars['ID']['output'];
  post?: Maybe<Post>;
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  getCommentsByPostId?: Maybe<Array<Maybe<Comment>>>;
  getLikedPostByPostId?: Maybe<Exists>;
  getLikedPostByUser?: Maybe<Array<Maybe<PostLikes>>>;
  getPostById?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getPostsWithPagination?: Maybe<Array<Maybe<Post>>>;
  getTotalLikesByPostId?: Maybe<PostLikes>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryGetCommentsByPostIdArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLikedPostByPostIdArgs = {
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetLikedPostByUserArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryGetPostByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetPostsWithPaginationArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryGetTotalLikesByPostIdArgs = {
  postId: Scalars['ID']['input'];
};

export type QuerySearchUsersArgs = {
  query: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded: Comment;
  postCreated?: Maybe<Post>;
};

export type SubscriptionCommentAddedArgs = {
  postId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<Count>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  lastname: Scalars['String']['output'];
  liked_posts?: Maybe<Array<Maybe<PostLikes>>>;
  profile?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CommentInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Exists = {
  __typename?: 'exists';
  exists?: Maybe<Scalars['Boolean']['output']>;
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

export type UserInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  Count: ResolverTypeWrapper<Count>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostLikes: ResolverTypeWrapper<PostLikes>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  commentInput: CommentInput;
  exists: ResolverTypeWrapper<Exists>;
  likePostInput: LikePostInput;
  postInput: PostInput;
  userInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  Count: Count;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Post: Post;
  PostLikes: PostLikes;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  User: User;
  commentInput: CommentInput;
  exists: Exists;
  likePostInput: LikePostInput;
  postInput: PostInput;
  userInput: UserInput;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']
> = {
  comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liked_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liked_posts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createComment?: Resolver<
    ResolversTypes['Comment'],
    ParentType,
    ContextType,
    Partial<MutationCreateCommentArgs>
  >;
  createPost?: Resolver<
    ResolversTypes['Post'],
    ParentType,
    ContextType,
    Partial<MutationCreatePostArgs>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    Partial<MutationCreateUserArgs>
  >;
  likePost?: Resolver<
    Maybe<ResolversTypes['PostLikes']>,
    ParentType,
    ContextType,
    Partial<MutationLikePostArgs>
  >;
  unlikePost?: Resolver<
    Maybe<ResolversTypes['PostLikes']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnlikePostArgs, 'id'>
  >;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  comments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liked_by?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>,
    ParentType,
    ContextType
  >;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostLikesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PostLikes'] = ResolversParentTypes['PostLikes']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  getCommentsByPostId?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType,
    Partial<QueryGetCommentsByPostIdArgs>
  >;
  getLikedPostByPostId?: Resolver<
    Maybe<ResolversTypes['exists']>,
    ParentType,
    ContextType,
    Partial<QueryGetLikedPostByPostIdArgs>
  >;
  getLikedPostByUser?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetLikedPostByUserArgs, 'userId'>
  >;
  getPostById?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    Partial<QueryGetPostByIdArgs>
  >;
  getPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType
  >;
  getPostsWithPagination?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType,
    Partial<QueryGetPostsWithPaginationArgs>
  >;
  getTotalLikesByPostId?: Resolver<
    Maybe<ResolversTypes['PostLikes']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetTotalLikesByPostIdArgs, 'postId'>
  >;
  getUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
  searchUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchUsersArgs, 'query'>
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  commentAdded?: SubscriptionResolver<
    ResolversTypes['Comment'],
    'commentAdded',
    ParentType,
    ContextType,
    RequireFields<SubscriptionCommentAddedArgs, 'postId'>
  >;
  postCreated?: SubscriptionResolver<
    Maybe<ResolversTypes['Post']>,
    'postCreated',
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  comments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liked_posts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>,
    ParentType,
    ContextType
  >;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExistsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['exists'] = ResolversParentTypes['exists']
> = {
  exists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  Count?: CountResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostLikes?: PostLikesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  exists?: ExistsResolvers<ContextType>;
};

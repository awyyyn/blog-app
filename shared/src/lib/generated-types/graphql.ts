import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type DeleteResult = {
  __typename?: 'DeleteResult';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
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
  followUser?: Maybe<User>;
  likePost?: Maybe<PostLikes>;
  savePost?: Maybe<SavedPost>;
  unlikePost?: Maybe<DeleteResult>;
  unsavePost?: Maybe<DeleteResult>;
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
  getLikedPostByPostId?: Maybe<LikedPostResult>;
  getLikedPostByUser?: Maybe<Array<Maybe<PostLikes>>>;
  getPostById?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getPostsWithPagination?: Maybe<Array<Maybe<PaginationResult>>>;
  getTotalLikesByPostId?: Maybe<PostLikes>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  savedPostsByUser?: Maybe<Array<Maybe<Post>>>;
  searchUser?: Maybe<SearchResult>;
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
  userId?: InputMaybe<Scalars['ID']['input']>;
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
  _count?: Maybe<Count>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  followedBy?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
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

export type LikePostInput = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type PaginationResult = {
  __typename?: 'paginationResult';
  _count?: Maybe<Count>;
  author?: Maybe<User>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  liked?: Maybe<Scalars['Boolean']['output']>;
  liked_by?: Maybe<Array<Maybe<PostLikes>>>;
  saved?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
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
  DeleteResult: ResolverTypeWrapper<DeleteResult>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LikedPostResult: ResolverTypeWrapper<LikedPostResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostLikes: ResolverTypeWrapper<PostLikes>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Type: Type;
  User: ResolverTypeWrapper<User>;
  commentInput: CommentInput;
  likePostInput: LikePostInput;
  paginationResult: ResolverTypeWrapper<PaginationResult>;
  postInput: PostInput;
  postLiked: ResolverTypeWrapper<PostLiked>;
  savedPost: ResolverTypeWrapper<SavedPost>;
  searchResult: ResolverTypeWrapper<SearchResult>;
  userInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  Count: Count;
  DeleteResult: DeleteResult;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LikedPostResult: LikedPostResult;
  Mutation: {};
  Post: Post;
  PostLikes: PostLikes;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  User: User;
  commentInput: CommentInput;
  likePostInput: LikePostInput;
  paginationResult: PaginationResult;
  postInput: PostInput;
  postLiked: PostLiked;
  savedPost: SavedPost;
  searchResult: SearchResult;
  userInput: UserInput;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Count'] = ResolversParentTypes['Count']> = {
  comments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liked_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liked_posts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteResult'] = ResolversParentTypes['DeleteResult']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikedPostResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikedPostResult'] = ResolversParentTypes['LikedPostResult']> = {
  exists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  liked_post_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, Partial<MutationCreateCommentArgs>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, Partial<MutationCreatePostArgs>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  followUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'followId' | 'userId'>>;
  likePost?: Resolver<Maybe<ResolversTypes['PostLikes']>, ParentType, ContextType, Partial<MutationLikePostArgs>>;
  savePost?: Resolver<Maybe<ResolversTypes['savedPost']>, ParentType, ContextType, RequireFields<MutationSavePostArgs, 'postId' | 'userId'>>;
  unlikePost?: Resolver<Maybe<ResolversTypes['DeleteResult']>, ParentType, ContextType, RequireFields<MutationUnlikePostArgs, 'postId' | 'userId'>>;
  unsavePost?: Resolver<Maybe<ResolversTypes['DeleteResult']>, ParentType, ContextType, RequireFields<MutationUnsavePostArgs, 'postId' | 'userId'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liked_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>, ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostLikesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostLikes'] = ResolversParentTypes['PostLikes']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCommentsByPostId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, Partial<QueryGetCommentsByPostIdArgs>>;
  getLikedPostByPostId?: Resolver<Maybe<ResolversTypes['LikedPostResult']>, ParentType, ContextType, Partial<QueryGetLikedPostByPostIdArgs>>;
  getLikedPostByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>, ParentType, ContextType, RequireFields<QueryGetLikedPostByUserArgs, 'userId'>>;
  getPostById?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, Partial<QueryGetPostByIdArgs>>;
  getPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  getPostsWithPagination?: Resolver<Maybe<Array<Maybe<ResolversTypes['paginationResult']>>>, ParentType, ContextType, Partial<QueryGetPostsWithPaginationArgs>>;
  getTotalLikesByPostId?: Resolver<Maybe<ResolversTypes['PostLikes']>, ParentType, ContextType, RequireFields<QueryGetTotalLikesByPostIdArgs, 'postId'>>;
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  savedPostsByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType, RequireFields<QuerySavedPostsByUserArgs, 'userId'>>;
  searchUser?: Resolver<Maybe<ResolversTypes['searchResult']>, ParentType, ContextType, Partial<QuerySearchUserArgs>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  commentAdded?: SubscriptionResolver<ResolversTypes['Comment'], "commentAdded", ParentType, ContextType, RequireFields<SubscriptionCommentAddedArgs, 'postId'>>;
  postCreated?: SubscriptionResolver<Maybe<ResolversTypes['Post']>, "postCreated", ParentType, ContextType>;
  postLiked?: SubscriptionResolver<Maybe<ResolversTypes['postLiked']>, "postLiked", ParentType, ContextType, RequireFields<SubscriptionPostLikedArgs, 'postId'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  followedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liked_posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['paginationResult'] = ResolversParentTypes['paginationResult']> = {
  _count?: Resolver<Maybe<ResolversTypes['Count']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  liked_by?: Resolver<Maybe<Array<Maybe<ResolversTypes['PostLikes']>>>, ParentType, ContextType>;
  saved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostLikedResolvers<ContextType = any, ParentType extends ResolversParentTypes['postLiked'] = ResolversParentTypes['postLiked']> = {
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SavedPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['savedPost'] = ResolversParentTypes['savedPost']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['searchResult'] = ResolversParentTypes['searchResult']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  Count?: CountResolvers<ContextType>;
  DeleteResult?: DeleteResultResolvers<ContextType>;
  LikedPostResult?: LikedPostResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostLikes?: PostLikesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  paginationResult?: PaginationResultResolvers<ContextType>;
  postLiked?: PostLikedResolvers<ContextType>;
  savedPost?: SavedPostResolvers<ContextType>;
  searchResult?: SearchResultResolvers<ContextType>;
};


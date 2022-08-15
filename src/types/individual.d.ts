interface IIndividual {
  post: {
    postId: number;
    postTitle: string;
    postContent: string;
    commentCount: number;
    createTime: string;
  };
  comments: {
    commentId: number;
    commentWriter: string;
    commentContent: string;
    createDateTime: string;
  };
}

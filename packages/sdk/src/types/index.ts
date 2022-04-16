interface IEndpoints {
  posts: {
    api: (options: {
      postId: number;
    }) => {
      method: string;
      resource: string;
      params: {};
      body: null;
    };
  };
}

export { IEndpoints };

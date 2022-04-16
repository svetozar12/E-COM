interface IEndpoints {
  auth: {
    login: (options: {
      email: string;
      password: string;
    }) => {
      method: string;
      resource: string;
      params: {};
      body: null;
    };
  };
}

export { IEndpoints };

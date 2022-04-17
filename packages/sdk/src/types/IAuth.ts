interface IAuth {
  login: (options: {
    email: string;
    password: string;
  }) => {
    method: string;
    resource: string;
    params: {};
    body: {
      email: string;
      password: string;
    };
  };
  register: (options: {
    username: string;
    email: string;
    password: string;
  }) => {
    method: string;
    resource: string;
    params: {};
    body: {
      username: string;
      email: string;
      password: string;
    };
  };
  refresh: (options: {
    username: string;
    email: string;
  }) => {
    method: string;
    resource: string;
    params: {};
    body: {
      username: string;
      email: string;
    };
  };
  user: (options: {
    token: string;
  }) => {
    method: string;
    resource: string;
    params: {};
    body: {};
  };
}

export default IAuth;

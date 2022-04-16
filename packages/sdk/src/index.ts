import fetch from "node-fetch";

import { IEndpoints } from "./types";
class JSONPlaceholder {
  endpoints: IEndpoints;

  constructor() {
    this.endpoints = {
      // here we declare all endpoints for resource posts
      posts: {
        api: (options: { postId: number }) => {
          return {
            method: "GET",
            resource: `/api${options.postId ? `/${options.postId}` : ""}`,
            params: {},
            body: null,
          };
        },
      },
    };
  }
  request(
    endpoint: { method: string | undefined; body: any; resource: any } = { method: undefined, body: undefined, resource: undefined },
  ) {
    const url = `https://randomuser.me${endpoint.resource}`;
    console.log(url);
    return fetch(url, {
      method: endpoint?.method,
      // @ts-ignore
      body: endpoint?.body ? JSON.stringify(endpoint.body) : null,
    })
      .then(async (response) => {
        const data = await response.json();
        return data;
      })
      .catch((error) => {
        return error;
      });
  }

  posts(method = "", options = {}) {
    // @ts-ignore
    const existingEndpoint = this.endpoints.posts[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      return this.request(endpoint);
    }
  }
}

const jsonPlaceholder = new JSONPlaceholder();

export default jsonPlaceholder;

const init = async () => {
  const data = await jsonPlaceholder.posts("api");
  console.log(data);
};

init();

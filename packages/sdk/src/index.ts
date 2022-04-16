import fetch from "node-fetch";
import "dotenv/config";
import { IEndpoints } from "./types";

class API {
  endpoints: IEndpoints;

  constructor() {
    this.endpoints = {
      // here we declare all endpoints for resource posts
      auth: {
        // @ts-ignore
        login: (options) => {
          return {
            method: "POST",
            resource: "/auth/login",
            headers: { "Content-Type": "application/json" },
            params: {},
            body: {
              email: options.email,
              password: options.password,
            },
          };
        },
      },
    };
  }
  request(endpoint: any = {}) {
    const url = `${process.env.API_URL}${endpoint.resource}`;
    return fetch(url, {
      method: endpoint?.method,
      headers: endpoint.headers,
      body: JSON.stringify(endpoint.body),
    })
      .then(async (response) => {
        const data = await response.json();
        return data;
      })
      .catch((error) => {
        return error;
      });
  }

  auth(method = "", options = {}) {
    // @ts-ignore
    const existingEndpoint = this.endpoints.auth[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      return this.request(endpoint);
    }
  }
}

const sdk = new API();

export default sdk;

const init = async () => {
  const data = await sdk.auth("login", { email: "ivan@.com", password: "ivan" });
  console.log(data);
};

init();

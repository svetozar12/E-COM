import axios from "axios";
import { IEndpoints } from "../types";

// pattern: Builder Pattern(js variation)
class API {
  endpoints: IEndpoints;

  constructor() {
    this.endpoints = {
      // here we declare all endpoints for resource auth
      auth: {
        login: (options = { email: "", password: "" }) => {
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
        register: (options = { username: "", email: "", password: "" }) => {
          return {
            method: "POST",
            resource: "/auth/register",
            headers: { "Content-Type": "application/json" },
            params: {},
            body: {
              username: options.username,
              email: options.email,
              password: options.password,
            },
          };
        },
        refresh: (options = { username: "", email: "" }) => {
          return {
            method: "POST",
            resource: "/auth/refresh",
            headers: { "Content-Type": "application/json" },
            params: {},
            body: {
              username: options.username,
              email: options.email,
            },
          };
        },
        user: (options = { token: "" }) => {
          return {
            method: "GET",
            resource: "/auth/refresh",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${options.token}` },
            params: {},
            body: {},
          };
        },
      },
    };
  }
  // creating and url for the api request and returning the data
  request(endpoint: any = {}) {
    const url = `http://localhost:5000${endpoint.resource}`;
    return axios({
      method: endpoint?.method,
      url,
      headers: endpoint.headers,
      data: endpoint.body,
    })
      .then(async (response: any) => {
        const data = await response.json();
        return data;
      })
      .catch((error: any) => {
        return error;
      });
  }

  auth(method: string = "", options = {}) {
    // @ts-ignore
    const existingEndpoint = this.endpoints.auth[method];

    if (existingEndpoint) {
      const endpoint = existingEndpoint(options);
      return this.request(endpoint);
    } else {
      return console.log("Invalid endpoint");
    }
  }
}

const sdk = new API();

export default sdk;

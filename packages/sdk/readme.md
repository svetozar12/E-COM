# Project Title

This is and sdk(software development kit) for easier use of an api.

## How to run the sdk

`yarn/npm install`

### This project cannot be used alone without and api provided

### How to import the sdk

`import { endpoint_enums } from "@E-COM/sdk";`

`import { sdk } from "@E-COM/sdk";`

## Example

`text sdk.auth(endpoint_enums.login,{body for the endpoint...})`

endpoint enums is an js object with all route for the specified resource in the case above its auth

### example for how to get user info

`sdk.auth(endpoint_enums.user, { token });`

### example for how to register user

`sdk.auth(endpoint_enums.register, { username, email, password });`

### example for how to get user refresh token

`sdk.auth(endpoint_enums.user, { username, email });`

### example for how to login

`sdk.auth(endpoint_enums.login, { email, password });`

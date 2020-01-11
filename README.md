# Adonis API application

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a simple Adonis API server which implements the following features:

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Running the application

Clone the repo and run `npm install`. After this you will be able to run the API by using the `adonis serve --dev` command.


## Testing the application

Use the following routes to test the application:

### Create User
```
POST /account/register
{
    "email: "test@mail.com",
    "username": "my_username",
    "password": "my_password
}
```

### Login

```
POST /account/login
{
    "email: "test@mail.com",
    "password": "my_password
}

RESPONSE
{
  "type": "bearer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU3ODcxNDE0MX0.F0eM7WsO8aQk-XrLL8s-0Jv6iFNgQ1PUnYGgaWithSc",
  "refreshToken": null
}
```

### Create Post
```
POST /posts/create

HEADER
Authorization: bearer USER_JWT_TOKEN

BODY
{
	"title": "The First Post"
}
```

### Get Post
```
GET /posts/:id

HEADER
Authorization: bearer USER_JWT_TOKEN
```

### Get Posts
```
POST /posts

HEADER
Authorization: bearer USER_JWT_TOKEN
```

### Delete Post
```
POST /posts/:id/delete

HEADER
Authorization: bearer USER_JWT_TOKEN
```
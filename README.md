# Adonis API application

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This is a simple Adonis API server which implements the following features:

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Running the application

1. Clone the repository
2. Run `npm install` from the project folder
3. Install Docker >=17.0 if you have not done it yet
4. Run `docker-compose up -d` from the `docker` folder (the PostgreSQL and the PgAdmin containers will up)
5. Create a database called *adonisjs* in PostgreSQL
6. Create a *.env* file based on the *.env.example* file
7. Install Adonis globally by running `npm i -g @adonisjs/cli`
8. Run `adonis migration:run`
9. Run the `adonis serve --dev`
10. The server will listen on `http://localhost:3333`


## Testing the application

Use the following routes to test the application:

### Create User
```
POST /api/v1/account/register
{
    "email: "test@mail.com",
    "username": "my_username",
    "password": "my_password
}
```

### Login

```
POST /api/v1/account/login
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
POST /api/v1/posts/create

HEADER
Authorization: bearer USER_JWT_TOKEN

BODY
{
	"title": "The First Post"
}
```

### Get Post
```
GET /api/v1/posts/:id

HEADER
Authorization: bearer USER_JWT_TOKEN
```

### Get Posts
```
POST /api/v1/posts

HEADER
Authorization: bearer USER_JWT_TOKEN
```

### Delete Post
```
POST /api/v1/posts/:id/delete

HEADER
Authorization: bearer USER_JWT_TOKEN
```
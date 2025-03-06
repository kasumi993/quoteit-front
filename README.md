# QuoteTier FrontEnd

This is the frontEnd application for QuoteTier, a platform for managing and sharing inspirational quotes. The backend is built using Flask and PostgreSQL, and it includes functionality for adding, retrieving, liking, unliking, and deleting quotes.


<img width="1437" alt="Screenshot 2024-05-29 at 09 40 10" src="https://github.com/kasumi993/quoteit-front/assets/42519251/90bd63e3-2a40-46f9-a1e4-3217ed8b0a87">

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Add new quotes with author, content, creator, and likes.
- Retrieve all quotes or search quotes by content or author.
- Like or unlike quotes.
- Delete quotes.

## Requirements

- Node 18.17+
- QuoteTier-BackEnd (
   ```sh
  git clone https://github.com/kasumi993/quotetier-backend.git
  cd quotetier-backend
  docker-compose up --build
    ```
  )

### Technologies Used: Vue.JS (3), Sass, TailwindCss, Vitest, Cypress

## Installation
1. **Clone the repository:**

    ```sh
    git clone https://github.com/kasumi993/quotetier-frontend.git
    cd quotetier-frontend

1. **Install the dependencies:**

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```





## Other

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

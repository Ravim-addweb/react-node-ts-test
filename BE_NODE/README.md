## Prerequisites

Before running the project, make sure you have the latest version of Node.js installed on your system. You can download and install it from [nodejs.org](https://nodejs.org/).

Also, set the necessary environment variables as per the provided `.env.example` file.

## Running Locally

To run the project locally, follow these steps:

1. **Create Environment File**: Create a `.env` file based on the template provided in `.env.example`. This file will contain environment-specific variables needed for your application.

2. **Install Dependencies**: Install project dependencies by running the following command:

   ```bash
   npm install
   ```

3. **Build and Start the Application**: Execute the following commands to build and start the application:

   ```bash
   npm run build || npm run build-watch
   npm run start || npm run start-watch
   ```

   If you want live reloading during development, ensure both the build and start commands are run simultaneously.

   **Note**: For live reloading, ensure both the build and start commands are run simultaneously.

## Available Scripts

In the `package.json` file, you can find the following scripts to simplify development tasks:

- **Build**: Compiles TypeScript files into JavaScript using the TypeScript Compiler (tsc).
- **Build Watch**: Continuously watches for changes in TypeScript files and compiles them automatically.
- **Lint**: Lints the code using ESLint to ensure code quality and adherence to coding standards.
- **Lint Fix**: Attempts to automatically fix linting issues.
- **Start**: Runs linting and starts the application.
- **Start Watch**: Runs linting, starts the application using nodemon, and watches for changes.

Feel free to use these scripts according to your development workflow.

## Development Dependencies

Make sure you have the following development dependencies installed:

- **nodemon**: For automatically restarting the server on file changes. You can install it using:

  ```bash
  npm install --save-dev nodemon
  ```

## API Collection

### Base URL

The base URL for all API endpoints is:

```
http://localhost:5000/api/v1
```

### Endpoints

#### GET /

- Description: Test endpoint to check if the API is running.
- Endpoint: `/`
- Example: 
  ```http
  GET http://localhost:5000/
  ```
- Response:
  ```
  API Running
  ```

#### GET /list

- Description: Fetch data from Flickr.
- Endpoint: `/list`
- Query Parameters:
  - `page` (integer): The page number of results to retrieve (default: 1).
  - `per_page` (integer): The number of results per page (default: 10).
- Example: 
  ```http
  GET http://localhost:5000/api/v1/list?page=1&per_page=20
  ```

#### GET /search

- Description: Search for images on Flickr based on tags.
- Endpoint: `/search`
- Query Parameters:
  - `tags` (string): The tags to search for.
  - `page` (integer): The page number of results to retrieve (default: 1).
  - `per_page` (integer): The number of results per page (default: 10).
- Example: 
  ```http
  GET http://localhost:5000/api/v1/search?tags=landscape&page=1&per_page=20
  ```

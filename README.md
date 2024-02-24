# GitHub Repositories and Users Autocomplete Component 

This repository contains the solution for a coding challenge aimed at creating a reusable and self-contained autocomplete component for fetching matching GitHub users and repositories based on a given string of characters.

### Demo

[GitHub Autocomplete Demo](https://github-autocomplete.netlify.app)

## Requirements

- Don’t use an existing autocomplete library.
- Minimal chars number to initialize search: 3.
- Result items are combined and displayed alphabetically using repository and profile name as ordering keys.
- Number of result items should be limited to 50 per request.
- The component should give visual feedback for when the data is being fetched, the results are empty, or the request resulted in an error.
- The component supports keyboard strokes (up and down arrows to browse the results, enter to open a new tab with the repository/user page).
- The solution should also display a meaningful snippet of your ability to test the code.

## Tech Stack

- React
- TypeScript
- Jest

## Installation and Usage

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/adrian-domanski/github-autocomplete.git
    ```

2. Navigate to the project directory:

   ```bash
     cd github-autocomplete
    ```
    
2. Install dependencies:

   ```bash
     npm install
    ```
    
## Available Scripts

In the project directory, you can run the following scripts:

- `start`: Starts the development server.
- `build`: Builds the production-ready bundle.
- `test`: Runs the test suite.
- `test:watch`: Runs the test suite in watch mode.
- `test:coverage`: Runs the test suite and generates code coverage report.

You can run these scripts using npm or yarn, for example:

```bash
npm run start
```

### Dependencies

- **@testing-library/user-event**: ^13.5.0
- **@types/node**: ^16.18.83
- **@types/react**: ^18.2.58
- **@types/react-dom**: ^18.2.19
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-icons**: ^5.0.1
- **react-scripts**: 5.0.1
- **react-toastify**: ^10.0.4
- **styled-components**: ^6.1.8
- **typescript**: ^4.9.5
- **web-vitals**: ^2.1.4

### Dev Dependencies

- **@babel/preset-env**: ^7.23.9
- **@babel/preset-react**: ^7.23.3
- **@babel/preset-typescript**: ^7.23.3
- **@testing-library/jest-dom**: ^6.4.2
- **@testing-library/react**: ^14.2.1
- **@types/jest**: ^29.5.12
- **babel-jest**: ^29.7.0
- **babel-plugin-styled-components**: ^2.1.4
- **jest**: ^29.7.0
- **jest-environment-jsdom**: ^29.7.0
- **react-test-renderer**: ^18.2.0
- **ts-jest**: ^29.1.2


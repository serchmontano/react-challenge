# React Challenge

Welcome to the React Challenge project! This project is set up using React, Redux Toolkit, and Vite, along with other helpful tools like ESLint for code quality and Tailwind CSS for styling.

## Getting Started

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project requires Node.js version 14 or later.

### Installation

To get started with the project, first clone the repository to your local machine. Then, navigate to the project directory and install the dependencies:

```
npm install
```

### Running the Project

To start the development server, run:

```
npm run dev
```

This command will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

### Running with Docker

If you prefer to run the project locally using Docker, simply execute:

```
docker-compose up --build
```

Then, open your browser and navigate to `localhost` on port 80.

## Building the Project

### Compile for Production

To create a production build of the project, run:

```
npm run build
```

This command compiles the application into static files in the `dist` directory.

### Previewing the Build

After building the project, you can preview the compiled version locally using:

```
npm run preview
```

This command serves the built application on a local server. You can view it in your browser as you would with the development server.

## Deployment

### Preparing for Deployment

Before deploying the project, you need to create a production build:

```
npm run predeploy
```

This command is a convenience script that runs `npm run build` to ensure your project is compiled for production.

### Deploying to GitHub Pages

To deploy the project to GitHub Pages, use:

```
npm run deploy
```

This command will push the contents of the `dist` directory to the `gh-pages` branch of your GitHub repository. The deployed site will be available at the URL specified in the `homepage` field of your `package.json`, which is [https://serchmontano.github.io/react-challenge](https://serchmontano.github.io/react-challenge) for this project.

---

Feel free to customize this README to better fit your project's specific needs or to add additional information such as a project description, screenshots, contribution guidelines, etc.

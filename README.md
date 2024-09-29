# Full Stack Project: GoFiber Backend & Astro Frontend

This project consists of a GoFiber backend and an Astro-based frontend template. The Astro frontend is deployed to **Netlify**, while the GoFiber backend is deployed to **Railway**.

## Frontend: Astro (Deployed to Netlify)

The frontend is built with **Astro**. It is structured with components, layouts, and pages for easy reuse and separation of concerns.

### Key Features:
- **Astro**: Fast static site generator.
- **TailwindCSS**: For styling and responsiveness.
- **Netlify Deployment**: Automatically deploys when pushed to the GitHub repository.
  
### Commands:
- Install dependencies:
  ```bash
  npm install
  ```
- Run development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
### Deployment:

This project is set up to automatically deploy on Netlify. The deployment settings are configured in the `netlify.toml` file.

#### Environment Variables:
You can configure environment variables for the frontend in the `netlify.toml` file or through the Netlify dashboard.


## Backend: GoFiber (Deployed to Railway)

The backend is built with GoFiber, a fast, minimalist web framework for Go.

### Key Features:

- GoFiber: Fast, scalable web framework.
- Railway Deployment: Automatically deploys the backend to Railway.

### Commands:

- Run the Go server locally:
  ```bash
  go run main.go
  ```
- Install Go Dependencies:
  ```bash
  go mod tidy
  ```
### Deployment:

The GoFiber backend is deployed to **Railway**. Simply push changes to your Git repository, and Railway will automatically deploy the new version.

## Development Workflow

### Running Locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Lazhari/go-astro
    cd go-astro
    ```

2. Create an .env file in the client folder: Before running the Astro frontend, create an .env file in the client folder to store environment variables for your frontend:
    ```bash
      cd client
      touch .env
    ```
    Add your environment variables to the .env file:
    ```bash
    PUBLIC_API_URL=http://localhost:8080
    ```

3. **Frontend**: Navigate to the client folder to install dependencies and run the frontend locally:
    ```bash
    cd client
    npm install
    npm run dev
    ```

4. **Backend**: Navigate to the project root and run the GoFiber backend:
    ```bash
    go run .
    ```

5. Both the frontend and backend should now be running locally. You can make API calls from the frontend to the GoFiber API.

## Deployment

### Frontend (Netlify):
The frontend automatically deploys to Netlify when you push to the main branch. Ensure your repository is linked to Netlify and that you’ve configured the build settings in netlify.toml.

### Backend (Railway):
The backend automatically deploys to Railway. Make sure you’ve configured the environment variables and deployment settings in Railway.

## Environment Variables

Both the frontend and backend require environment variables for proper configuration.

- **Frontend (Astro)**: Configure these in your netlify.toml or in the Netlify dashboard.
- **Backend (GoFiber)**: Configure these in the Railway dashboard.

### Example .env for Backend:
```bash
PORT=9090
DATABASE_URL=your_database_url
```
### Example .env for Frontend:
```bash
PUBLIC_API_URL=http://localhost:9090
```

## License 

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
# Mini Project 2 – Full-Stack App Dockerization

## Assignment | Mini Project Setup – I

**Objective:**
Set up a full-stack application with a React frontend, Express backend, and PostgreSQL database using Docker Compose.

**Steps Completed:**

1. **Project Structure**

```
root/
├─ backend/
│  ├─ Dockerfile
│  ├─ package.json
│  └─ src/
├─ frontend/
│  ├─ Dockerfile
│  ├─ package.json
│  └─ src/
├─ docker-compose.yml
└─ .env
```

2. **Backend Dockerfile**

* Based on Node.js image
* Copies source code
* Installs dependencies
* Runs backend server

3. **Frontend Dockerfile**

* Based on Node.js image
* Copies source code
* Installs dependencies
* Builds React app
* Serves using `serve` package

4. **docker-compose.yml**

* Services: `db`, `backend`, `frontend`
* Database container with PostgreSQL image and environment variables from `.env`
* Networking between containers using default bridge network
* Mounted volumes for persistent database storage

5. **Environment Variables (.env)**

```
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=mydatabase
DB_PORT=5432
BACKEND_PORT=5000
FRONTEND_PORT=3000
```

6. **Running the app**

```
docker-compose up --build
```

---

## Assignment | Mini Project Setup – II

**Objective:**
Debug and finalize the Docker setup, ensuring all containers work correctly together and the full-stack app runs without errors.

**Steps Completed:**

1. **Debugging Database Issues**

* Fixed missing `POSTGRES_PASSWORD` error
* Ensured database initialized correctly with proper ownership and locale

2. **Verifying Container Logs**

* Checked logs for `db`, `backend`, and `frontend`
* Confirmed backend connected to PostgreSQL
* Confirmed frontend built successfully and served

3. **Networking and Environment Variables**

* Containers communicate using service names (`db` for PostgreSQL)
* Environment variables passed correctly to backend and frontend

4. **Final Testing**

* Backend API endpoints reachable at `http://localhost:5000`
* Frontend accessible at `http://localhost:3000`
* CRUD operations functional with PostgreSQL

---

**Next Steps / Submission:**

* Take screenshots of container setup, logs, and running app
* Push code to GitHub
* Submit PDF or DOC with screenshots and repository link

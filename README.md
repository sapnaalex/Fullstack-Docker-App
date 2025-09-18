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

---


# Assignment | Mini Project Setup – III

### Accessing Containers with `docker exec`

After running the project with:

```bash
docker-compose up --build
```

all three containers (`db`, `backend`, `frontend`) will be running. You can use `docker exec` to access them and run commands inside.

---

## Step 1: Check Running Containers

List all active containers:

```bash
docker ps
```

Example:

```
CONTAINER ID   IMAGE              STATUS         PORTS                    NAMES
a1b2c3d4e5f6   postgres:13        Up 2 minutes   0.0.0.0:5432->5432/tcp   fullstack-docker-app-db-1
b2c3d4e5f6g7   backend:latest     Up 2 minutes   0.0.0.0:5000->5000/tcp   fullstack-docker-app-backend-1
c3d4e5f6g7h8   frontend:latest    Up 2 minutes   0.0.0.0:3000->3000/tcp   fullstack-docker-app-frontend-1
```

---

## Step 2: Access the Database Container

```bash
docker exec -it fullstack-docker-app-db-1 bash
```

Start Postgres shell:

```bash
psql -U postgres -d mydatabase
```

Run SQL commands inside:

```sql
\dt   -- list tables
\q    -- quit Postgres
```

Exit container:

```bash
exit
```

---

## Step 3: Access the Backend Container

```bash
docker exec -it fullstack-docker-app-backend-1 bash
```

Check Node.js version or inspect files:

```bash
node -v
ls
```

Exit:

```bash
exit
```

---

## Step 4: Access the Frontend Container

```bash
docker exec -it fullstack-docker-app-frontend-1 bash
```

Check npm version:

```bash
npm -v
ls
```

Exit:

```bash
exit
```

---

✅ **Submission Tip**: Take a screenshot of entering the **DB container** and running `psql`. This will clearly show that your Postgres instance is running inside Docker.

---


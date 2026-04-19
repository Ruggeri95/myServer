# projeto-servidor

Academic project developed for the course **Introduction to Web Languages and Technologies** at the **University of Aveiro**.

---

## About the Project

**projeto-servidor** is a web application that simulates a server hosting platform, offering services such as:

- Server rental
- Domain registration
- Website creation

The project was built as part of a university assignment to apply concepts of modern web development, including frontend interfaces, backend APIs, and database integration.

---

## Technologies Used

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Markup | HTML |
| Styling | CSS Modules |
| Logic | JavaScript |
| Backend / API | Node.js (custom API) |
| Database | Neon PostgreSQL |

---

## How to Run the Project

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/Ruggeri95/projeto-servidor.git
cd projeto-servidor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the project and add your database connection string:

```env
DATABASE_URL=your_neon_postgres_connection_string
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### 5. Start the backend API (if applicable)

```bash
node server/index.js
```

---

## 📁 Project Structure

```
projeto-servidor/
├── public/          # Static assets
├── src/             # React source code
├── server/          # Backend API
├── index.html       # Entry HTML file
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies
```

---

## 👨‍🎓 Academic Context

- **Course:** Introduction to Web Languages and Technologies
- **Institution:** University of Aveiro
- **Degree:** CTeSP / Undergraduate Program

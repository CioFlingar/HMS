# 🏥 Mini Hospital Management System (HMS) – Department Module

![React](https://img.shields.io/badge/Frontend-React%20v5-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/Style-TailwindCSS%20CLI-38B2AC?logo=tailwind-css)
![Django](https://img.shields.io/badge/Backend-Django%20REST%20Framework-092E20?logo=django)
![Database](https://img.shields.io/badge/Database-SQLite%20%7C%20PostgreSQL-336791?logo=postgresql)
![License](https://img.shields.io/badge/Status-Completed-success)

---

## 📘 Overview

This project is a **Mini Hospital Management System (HMS)** focusing on the **Department Management** module.
It’s built to demonstrate **full-stack development** skills — including authentication, dashboard layout, CRUD APIs, and responsive UI design.

The system allows an admin to log in, view the dashboard, and **create, update, delete, and list hospital departments**.

---

## 🧰 Tech Stack

| Layer             | Technology                                       |
| ----------------- | ------------------------------------------------ |
| **Frontend**      | React v5, Tailwind CSS (latest CLI build), Axios |
| **Backend**       | Django REST Framework                            |
| **Database**      | SQLite (development) / PostgreSQL (production)   |
| **UI Components** | React Router v5, React Hot Toast                 |

---

## 🚀 Features

- 🔐 **Admin Login:** Hardcoded credentials (`admin / admin123`)
- 🧭 **Dashboard Layout:** Sidebar navigation (Dashboard, OPD, Department)
- 🏗️ **Department CRUD:** Add, edit, delete, and view departments
- 🔍 **Search Filter:** Instantly filter departments by name
- 📄 **Pagination:** Displays 5 departments per page
- ⚡ **Toast Notifications:** Success/error feedback for actions
- 💅 **Responsive Tailwind UI:** Clean and modern design

---

## 🛠️ Setup Guide

### 1️⃣ Backend Setup (Django REST Framework)

#### Install Poetry(python env manager)

```bash
cd backend
poetry install # or install manually: django djangorestframework corsheaders
poetry run python manage.py makemigrations
poetry run python manage.py migrate
poetry run python manage.py runserver
```

**Backend runs at:** `http://127.0.0.1:8000`

---

### 2️⃣ Frontend Setup (React + Tailwind CLI)

```bash
cd frontend
npm install
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch   # in one terminal
npm start                # in another terminal
```

**Frontend runs at:** `http://localhost:3000`

---

### 3️⃣ Environment File (.env)

Create a `.env` file inside `frontend/`:

```
REACT_APP_API_URL=http://127.0.0.1:8000/api
```

---

### 4️⃣ Login Credentials

```
Username: admin
Password: admin123
```

---

## 🔗 API Endpoints

| Method     | Endpoint                 | Description             |
| ---------- | ------------------------ | ----------------------- |
| **GET**    | `/api/departments/`      | Fetch all departments   |
| **POST**   | `/api/departments/`      | Create a new department |
| **PUT**    | `/api/departments/{id}/` | Update department by ID |
| **DELETE** | `/api/departments/{id}/` | Delete department by ID |

---

## 🧾 Database Schema

**departments Table**

| Field       | Type                     | Description            |
| ----------- | ------------------------ | ---------------------- |
| id          | Integer (Auto Increment) | Department ID          |
| name        | Varchar(100, Unique)     | Department name        |
| description | Text                     | Department description |
| status      | Varchar(10)              | Active / Inactive      |

---

## 🧑‍💻 Folder Structure

```
HMS/
 ├── backend/
 │   ├── departments/
 │   └── hms_backend/
 ├── frontend/
 │   ├── src/
 │   │   ├── pages/ (Login, Dashboard, Department)
 │   │   ├── components/ (Sidebar, Topbar)
 │   │   └── App.js
 │   ├── input.css
 │   └── .env
 └── README.md
```

---

## 🎥 Demo Video

<p align="center">
  <a href="https://drive.google.com/file/d/1ic7IwFcYoqA45cFNoNYDz69jIzhs29iP/preview">
    <img src="https://drive.google.com/thumbnail?id=1ic7IwFcYoqA45cFNoNYDz69jIzhs29iP&sz=w1000" width="800"/>
  </a>
</p>

_Click the thumbnail above to play the video in Google Drive (supports fullscreen, controls, etc.)_

## 📄 License

This project is licensed under the **Me ;)**, Just kiddin.

---

## Author

**Walid Hasan (CioFlinGar)**

- GitHub: [github.com/cioflingar](https://github.com/cioflingar)
- LinkedIn: [linkedin.com/in/walid-hasan-/](https://www.linkedin.com/in/walid-hasan-/)
- Email: [eng.walidhasan@gmail.com](mailto:eng.walidhasan@gmail.com)

# Blogify

A modern blogging platform built with **Next.js** (frontend) and **Express + MongoDB** (backend).  
Users can **register, login, create blogs, view featured blogs**, and perform CRUD operations. The backend is deployed on **Vercel**.

---

## Features

- User authentication (register/login) with hashed passwords.
- Create, read, update, and delete blogs.
- Fetch featured blogs sorted by rating.
- Search blogs by title.
- Responsive frontend with optimized images.
- Google OAuth integration and Credential Authentication.

---

## Live Links

- **Frontend:** [https://blogify-lilac-two.vercel.app](https://blogify-lilac-two.vercel.app)
- **Backend:** [https://blogify-backend-ashen.vercel.app](https://blogify-backend-ashen.vercel.app)

---

## Tech Stack

- **Frontend:** Next.js, Axios, TailwindCSS
- **Authentication:** NextAuth.js
- **Backend:** Express.js, MongoDB, bcrypt, cors
- **Deployment:** Vercel (backend & frontend)
- **Environment Variables:** `.env` file

---

## Setup & Installation

### 1. Clone the repository Frontend

```bash
git clone https://github.com/kamrulhasanPro/Blogify.git
```

Then

```bash
cd blogify
npm install
npm run dev
```

Create a .env file in the frontend folder and include:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:2000
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 2. Clone the repository Backend

```bash
git clone https://github.com/kamrulhasanPro/Blogify-Backend.git
cd blogify-backend
```

Then

```bash
cd blogify-backend
npm install
npm run dev
```

Create a .env file in the backend folder and include:

```bash
MONGODB_URI=your_mongodb_connection_string
```

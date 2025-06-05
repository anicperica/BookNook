# BookNook

A React app that fetches random books and lets users save them to a personal library using local storage.

![Vite](https://img.shields.io/badge/Vite-4.1-purple?logo=vite)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)


## 🌐 Live Demo

Check out the live application here: [BookNook](https://book-nook-alpha.vercel.app/)

## 💡 Purpose

This project was built as part of an internship coding assignment. It demonstrates my skills in building a user-authenticated React app that interacts with an external API and manages state effectively, including local storage usage.

## ✨ Features

- 🔐 **JWT Authentication** – Secure login and protected routes
- 📖 **Book Discovery** – Browse and explore a curated book list
- 💾 **Save Your Favorites** – Add books to your personal library (localStorage)
- 📱 **Responsive Design** – Looks great on any device
- ⚡ **Super Fast** – Powered by Vite and optimized for performance
- 🎨 **Modern UI** – Styled with Tailwind CSS


## 🚀 Getting Started

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/anicperica/BookNook
   
   cd BookNook
```
3. **Install dependencies:**
```bash
   npm install
```
3. **Set up environment variables:**
   Create a .env file in the root with:
```bash
   VITE_API_BASE_URL=https://bootcamp2025.depster.me
   
   VITE_API_LOGIN_ENDPOINT=https://bootcamp2025.depster.me/login
```
## Scripts
Development mode:
```bash
* npm run dev 
```
Production mode:
```bash
* npm run build 

* npm run start 
```


## 🔐 Authentication & Login

This application does **not include a public registration page**. As per the internship instructions, only users who applied for the internship and were pre-approved can log in.

### 📝 How Login Works

- You must log in using the **email address submitted during your internship application**
- Registration is handled **externally** and not part of this application
- During development, account setup and token retrieval were done using tools like **Postman**

### ✅ Credentials Format

- **Email** – Must match the one used for internship registration  
- **Password** – As provided or set during initial registration

### 🔁 Authentication Flow

1. The user enters their email and password into the login form
2. On success, a **JWT token** is returned from the API and stored in a **browser cookie**
3. This cookie is included in future API requests to authenticate the user
4. If the login fails (e.g., wrong credentials), an error message is shown
5. Key features (like fetching and saving books) are only available to authenticated users

> ⚠️ The token is stored in a **regular browser cookie** (not HTTP-only). This works for the assignment but may not be suitable for production apps where enhanced security is required.

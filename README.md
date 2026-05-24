# Tejjora-Shops (Full-Stack E-Commerce Backend Integration)

Welcome to the central repository for **Tejjora-Shops**, a highly optimized full-stack e-commerce architecture built using Next.js App Router and MongoDB Atlas. This project showcases dynamic database management, secure environment handling, and advanced REST API design patterns.

## 🚀 Key Technical Features
- **Dynamic Routing & Architecture:** Leveraged Next.js App Router for strict separation of UI layouts and backend endpoints (`/api/products/[id]`).
- **Cloud Database Integration:** Connected application logic seamlessly to **MongoDB Atlas Cluster** utilizing optimized Mongoose connection wrappers.
- **Advanced CRUD APIs:** Built robust server-side request handlers managing production-ready data manipulation:
  - `POST`: Seamless ingestion and creation of new product specifications.
  - `PUT`: Granular data modifications using MongoDB’s native `$set` operator mapped through dynamic URL contextual boundaries (`params.id`).
- **Security Protocols:** Application credentials and MongoDB URIs are fully isolated using protected local environment variables (`.env.local`).

## 🛠️ Tech Stack & Tools
- **Frontend/Backend Framework:** Next.js (React), JavaScript (ES6+)
- **Database Layer:** MongoDB Atlas (Cloud Database), Mongoose ORM
- **Testing & Tooling:** Version Control (Git/GitHub), Thunder Client, VS Code

## 📁 Core Backend API Structure
```text
app/
└── api/
    └── products/
        └── [id]/
            └── route.js  <-- Handles dynamic POST (Creation) & PUT (Updates)
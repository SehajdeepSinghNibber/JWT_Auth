# JWT Authentication System

A secure and scalable authentication backend built with **Node.js**, **Express.js**, **MongoDB**, **JWT**, **Zod**, and **Nodemailer**. It provides complete user authentication, email verification through OTP, request validation, password security, and protected route authorization out of the box.

## Features

* 🔐 JWT-based Authentication & Authorization
* 📧 Email OTP Verification
* 👤 User Registration & Login
* 🔑 Secure Password Hashing with bcrypt
* ✅ Request Validation using Zod
* 🛡 Route Protection Middleware
* 🍪 HTTP-Only Cookie Authentication
* 🔄 OTP Generation, Expiration, and Verification
* 🚪 User Logout Support
* ❌ Centralized Error Handling
* 🗄 MongoDB Integration with Mongoose
* 🌐 RESTful API Design

## Authentication Flow

### Signup

* User submits registration details.
* Input is validated using Zod.
* Password is securely hashed using bcrypt.
* User account is created.
* Verification OTP is sent to the user's email.
* Account remains unverified until OTP verification is completed.

### Email Verification

* User submits the OTP received via email.
* OTP validity and expiration are checked.
* Account is marked as verified upon successful validation.

### Login

* User provides email/username and password.
* Credentials are verified.
* A JWT token is generated.
* Token is stored securely and used for future authenticated requests.

### Protected Routes

* JWT middleware validates incoming tokens.
* Authenticated user information is attached to the request.
* Unauthorized requests are blocked automatically.

## Security Features

* Password hashing using bcrypt
* JWT token authentication
* Token expiration checks
* Email ownership verification through OTP
* Request validation with Zod
* HTTP-only cookie support
* Protected route middleware
* Environment variable-based configuration
* Structured error responses

## API Endpoints

### Authentication

| Method | Endpoint      | Description                    |
| ------ | ------------- | ------------------------------ |
| POST   | `/signup`     | Register a new user            |
| POST   | `/verify-otp` | Verify email OTP               |
| POST   | `/login`      | Login user                     |
| POST   | `/logout`     | Logout authenticated user      |
| GET    | `/me`         | Get current authenticated user |

## Environment Variables

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

## Installation

```bash
git clone <repository-url>

cd <project-name>

npm install

npm run dev
```

## Validation

All incoming requests are validated using Zod schemas before processing. Invalid requests return detailed validation errors to ensure data integrity and improve API reliability.

## Error Handling

The application handles:

* Invalid credentials
* Validation failures
* Unauthorized access
* Invalid or expired JWT tokens
* OTP verification errors
* Database-related errors
* Unexpected server exceptions

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* Zod
* bcryptjs
* Nodemailer
* dotenv

## License

MIT License

---

A production-ready authentication solution that can be integrated into any modern web application requiring secure user authentication and email verification. 🚀

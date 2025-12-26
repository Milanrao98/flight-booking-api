# ✈️ Flight Booking REST API

A full-featured **Flight Booking System backend** built using **Node.js, Express.js, and MongoDB**, following **MVC architecture** with **JWT-based authentication** and **role-based authorization**.

This project simulates a real-world airline booking system where users can search flights, book seats, and request cancellations, while admins manage flight inventory and approvals.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (`user`, `admin`)
- Secure protected routes

### 👤 User Management
- View user profile
- Update profile details
- Upload profile picture using Multer
- Password hashing using bcrypt

### ✈️ Flight Management (Admin Only)
- Create, update, and delete flights
- Upload airline logo/image
- Manage seat availability
- Public flight search with filters

### 📘 Booking System
- Create bookings with multiple passengers
- Automatic seat decrement on booking
- Booking cancellation request by user
- Booking cancellation approval by admin
- Seat restoration on cancellation

### 🧠 Backend Architecture
- MVC (Model–View–Controller) structure
- Centralized error handling middleware
- Request & error logging
- Environment-based configuration
- RESTful API design

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **File Uploads:** Multer
- **Logging:** Morgan + custom logger
- **Architecture:** MVC + ES6 Modules
- **API Testing:** Postman

---

## 📁 Project Structure

flight-booking-api/
├── server.js
├── package.json
├── .env
├── src/
│ ├── app.js
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Flight.js
│ │ └── Booking.js
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ ├── user.controller.js
│ │ ├── flight.controller.js
│ │ └── booking.controller.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── user.routes.js
│ │ ├── flight.routes.js
│ │ └── booking.routes.js
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ ├── role.middleware.js
│ │ ├── upload.middleware.js
│ │ └── errorHandler.js
│ └── utils/
│ └── logger.js
└── uploads/



---

## 🔐 API Endpoints

### Authentication
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Users
| Method | Endpoint | Access |
|------|---------|--------|
| GET | `/api/users` | Authenticated |
| PUT | `/api/users/profile` | Authenticated |

### Flights
| Method | Endpoint | Access |
|------|---------|--------|
| POST | `/api/flights` | Admin |
| GET | `/api/flights` | Public |
| GET | `/api/flights/:id` | Public |
| PUT | `/api/flights/:id` | Admin |
| DELETE | `/api/flights/:id` | Admin |

### Bookings
| Method | Endpoint | Access |
|------|---------|--------|
| POST | `/api/bookings` | User |
| PUT | `/api/bookings/:id/cancel` | User |
| PUT | `/api/bookings/:id/admin-cancel` | Admin |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Milanrao98/flight-booking-api.git
cd flight-booking-api

# Solution - Booking System

This directory contains the complete reference implementation of the booking system.

## What's Included

- Service selection interface
- Interactive calendar with available dates
- Time slot picker with availability logic
- Customer information form
- Booking confirmation with email
- Admin dashboard to view all bookings
- Cancellation with email notification

## Tech Stack

Frontend:
- React 18 with Vite
- TailwindCSS
- React Big Calendar or custom calendar
- Axios

Backend:
- Node.js with Express
- MongoDB with Mongoose
- Nodemailer for emails
- date-fns for date handling

## Running the Solution

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Project Structure

```
solution/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Calendar.jsx
│   │   │   ├── TimeSlotPicker.jsx
│   │   │   └── BookingForm.jsx
│   │   ├── pages/
│   │   │   ├── Book.jsx
│   │   │   └── Admin.jsx
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/Booking.js
│   │   ├── routes/bookings.js
│   │   └── services/email.js
│   └── package.json
└── README.md
```

## Key Concepts Demonstrated

- Date and time slot management
- Database queries to prevent conflicts
- Email templating and delivery
- Admin vs customer views
- Form validation for dates

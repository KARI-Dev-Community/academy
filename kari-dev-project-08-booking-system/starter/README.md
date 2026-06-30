# Starter - Booking System

This is your starting point for the booking system. A basic structure is provided; you need to implement the booking logic and email notifications.

## What's Included

- React frontend scaffold
- Express backend setup
- MongoDB connection
- Basic Booking model
- Calendar component placeholder

## What You Need to Build

### Required Features
1. Select service type
2. Choose date from calendar
3. Pick available time slots
4. Fill in customer details form
5. Confirm booking
6. Store booking in database

### Stretch Goals
- Prevent double bookings
- Send confirmation emails with Nodemailer
- Add booking cancellation
- Show upcoming bookings
- Admin view of all bookings
- Timezone handling
- Payment integration

## Getting Started

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

## Tips

- Use date-fns or dayjs for date manipulation
- Query database for existing bookings before allowing new ones
- Store emails as templates, not hardcoded strings
- Validate date is not in the past
- Consider timezone handling for international users

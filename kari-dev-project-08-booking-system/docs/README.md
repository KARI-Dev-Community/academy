# Step-by-Step Guide - Booking System

Follow these steps to build your booking system.

## Step 1: Project Setup

```bash
mkdir booking-system && cd booking-system
mkdir frontend backend
```

Frontend:
```bash
cd frontend
npm create vite@latest . -- --template react
npm install axios date-fns
```

Backend:
```bash
cd ../backend
npm init -y
npm install express mongoose cors nodemailer dotenv date-fns
npm install -D nodemon
```

## Step 2: Data Model

Create Booking schema:

```javascript
{
  customerName: String,
  email: String,
  phone: String,
  serviceType: String,
  date: Date,
  timeSlot: String,
  status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' }
}
```

## Step 3: Service Selection

1. Create service types array
2. Display as clickable cards
3. Store selection in state
4. Enable next step on selection

## Step 4: Calendar Component

1. Show current month
2. Highlight available dates
3. Disable past dates and fully booked dates
4. Query backend for booked slots per date

## Step 5: Time Slot Selection

1. Define business hours (e.g., 9am-5pm)
2. Generate 1-hour slots
3. Query backend for existing bookings
4. Disable taken slots
5. Allow selection of one slot

## Step 6: Booking Form

1. Collect name, email, phone
2. Validate email format
3. Validate phone format
4. Show booking summary before submit

## Step 7: Backend Booking Logic

1. Check for conflicting bookings
2. Create booking document
3. Send confirmation email
4. Return success response

## Step 8: Email Notifications

1. Install Nodemailer
2. Configure SMTP or Ethereal for testing
3. Create HTML email template
4. Send on booking confirmation
5. Send on cancellation

## Milestone Checklist

- [ ] Can select a service
- [ ] Calendar shows available dates
- [ ] Can pick time slot
- [ ] Form validates input
- [ ] Booking saves to database
- [ ] Confirmation email sends
- [ ] Double bookings prevented

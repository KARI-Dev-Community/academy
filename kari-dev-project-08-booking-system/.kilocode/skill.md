# Kari Dev - Booking System Skill

## Project Identity

You are working on **Booking System** for the Kari Dev learning community.

A booking and reservation management system.

## Learning Objectives

- Model complex booking data
- Handle date and time availability
- Implement email notifications
- Build calendar interfaces

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: React + Vite, Express.js, MongoDB
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: React + Vite, TailwindCSS, Node.js, Express.js, MongoDB, Nodemailer, date-fns
- Complete working implementation with best practices
- Key file structure: `frontend/{components/{Calendar,TimeSlotPicker,BookingForm},pages/{Book,Admin}}, backend/{models,routes,services/email}`
- Demonstrates: Date and time slot management, Database queries to prevent conflicts, Email templating and delivery, Admin vs customer views, Form validation for dates

## Core Domain Concepts

- Booking model: customerName, email, phone, serviceType, date, timeSlot, status
- Date/time slot availability queries
- Conflict prevention: check existing bookings before creating
- Nodemailer for SMTP email delivery
- date-fns for date manipulation and formatting
- Calendar UI: highlight available, disable past/booked dates

## Step-by-Step Milestones

- [ ] Can select a service
- [ ] Calendar shows available dates
- [ ] Can pick time slot
- [ ] Form validates input
- [ ] Booking saves to database
- [ ] Confirmation email sends
- [ ] Double bookings prevented

## Contribution Guidelines

### What You Can Improve
- Add calendar view for availability
- Implement time slot selection
- Add email confirmations with Nodemailer
- Create booking modification/cancellation
- Add recurring bookings
- Implement waitlist when fully booked
- Add SMS notifications
- Create admin dashboard for managing bookings

### Pull Request Requirements
- Double bookings are prevented
- Date/time validation is correct
- Email sends on booking confirmation
- UI is responsive

## Starter Features

### Required
- Select service type
- Choose date from calendar
- Pick available time slots
- Fill in customer details form
- Confirm booking
- Store booking in database

### Stretch Goals
- Prevent double bookings
- Send confirmation emails with Nodemailer
- Add booking cancellation
- Show upcoming bookings
- Admin view of all bookings
- Timezone handling
- Payment integration

## Sample Project Structure

```
sample/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── main.tsx   # Entry point
│   │   ├── App.tsx    # Main component with API call
│   │   └── index.css  # TailwindCSS
│   ├── Dockerfile
│   └── package.json
├── backend/           # NestJS app
│   ├── src/
│   │   ├── main.ts    # Nest bootstrap
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Key Implementation Notes

Uses date-fns for dates. Backend uses Nodemailer. Sample uses React Big Calendar or custom calendar component.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview

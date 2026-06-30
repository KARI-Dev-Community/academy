# Kari Dev - CRUD API Skill

## Project Identity

You are working on **CRUD API** for the Kari Dev learning community.

A RESTful API for managing a resource collection.

## Learning Objectives

- Design RESTful endpoints
- Implement CRUD operations
- Query and filter data efficiently
- Write API documentation

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: Express.js, MongoDB, basic project structure
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: Node.js, Express.js, MongoDB, Mongoose, express-validator
- Complete working implementation with best practices
- Key file structure: `Book resource with GET/POST/PUT/DELETE/search endpoints`
- Demonstrates: RESTful API design principles, Mongoose schemas and validation, Express middleware pipeline, Consistent API response patterns, HTTP status code usage

## Core Domain Concepts

- RESTful conventions: GET (read), POST (create), PUT (update), DELETE (remove)
- Mongoose schema validation and middleware
- Consistent JSON response envelope: { success, data, message }
- HTTP status codes: 200, 201, 400, 404, 500
- Pagination: limit, skip, page parameters
- express-validator for input validation

## Step-by-Step Milestones

- [ ] POST creates a new resource
- [ ] GET returns all resources
- [ ] GET /:id returns one resource
- [ ] PUT updates a resource
- [ ] DELETE removes a resource
- [ ] 404 handled for missing resources
- [ ] Validation prevents invalid data

## Contribution Guidelines

### What You Can Improve
- Add pagination and sorting
- Implement soft deletes
- Add search and advanced filtering
- Create API versioning (v1, v2)
- Add caching with Redis
- Write comprehensive test suite
- Add rate limiting
- Generate OpenAPI/Swagger documentation

### Pull Request Requirements
- All CRUD operations return correct HTTP status codes
- Input validation is thorough
- Error responses follow a consistent format
- API is documented

## Starter Features

### Required
- Create a resource (POST)
- Read all resources with pagination (GET)
- Read single resource by ID (GET)
- Update a resource (PUT/PATCH)
- Delete a resource (DELETE)
- Input validation on all endpoints
- Consistent JSON response format

### Stretch Goals
- Search by field
- Sort results
- Filter by date range
- Soft delete with `deletedAt` field
- Bulk operations
- Caching layer

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

Starter/solution use plain Express+MongoDB. Sample adds React table UI + NestJS + Docker. Solution uses Books as example resource.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview

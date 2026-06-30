# Step-by-Step Guide - CRUD API

Follow these steps to build your CRUD API.

## Step 1: Project Setup

```bash
mkdir crud-api && cd crud-api
npm init -y
npm install express mongoose dotenv cors
npm install -D nodemon
```

Create folder structure: `src/models`, `src/routes`, `src/controllers`, `src/middleware`.

## Step 2: Database and Model

1. Connect to MongoDB
2. Create a Mongoose schema for your resource
3. Export the model

```javascript
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: Number,
  genre: String
}, { timestamps: true });
```

## Step 3: Create Endpoint (POST)

1. Create route file for your resource
2. Handle POST requests
3. Validate input
4. Create and save document
5. Return created resource with 201 status

## Step 4: Read Endpoints (GET)

1. `GET /` - Find all with pagination
2. `GET /:id` - Find one by ID
3. Handle 404 when not found
4. Return consistent response format

## Step 5: Update Endpoint (PUT)

1. Find document by ID
2. Update with new data
3. Return updated document
4. Handle 404

## Step 6: Delete Endpoint (DELETE)

1. Find and delete by ID
2. Return 204 No Content on success
3. Handle 404

## Step 7: Middleware and Error Handling

1. Create centralized error handler
2. Add 404 handler for unknown routes
3. Validate all inputs before processing
4. Return consistent error format

## Milestone Checklist

- [ ] POST creates a new resource
- [ ] GET returns all resources
- [ ] GET /:id returns one resource
- [ ] PUT updates a resource
- [ ] DELETE removes a resource
- [ ] 404 handled for missing resources
- [ ] Validation prevents invalid data

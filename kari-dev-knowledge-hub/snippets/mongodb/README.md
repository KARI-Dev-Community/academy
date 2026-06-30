# MongoDB Snippets

Reusable MongoDB patterns.

## Connection Setup

```javascript
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connect() {
  await client.connect();
  db = client.db("kari-dev");
  console.log("Connected to MongoDB");
}
```

## Common Queries

```javascript
// Find with filters
const users = await db.collection("users").find({
  age: { $gte: 18, $lte: 65 },
  status: "active"
}).sort({ createdAt: -1 }).limit(10).toArray();

// Aggregation pipeline
const stats = await db.collection("orders").aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]).toArray();
```

## Indexes

```javascript
await db.collection("users").createIndex({ email: 1 }, { unique: true });
await db.collection("orders").createIndex({ userId: 1, createdAt: -1 });
```

## Transactions

```javascript
const session = client.startSession();
try {
  await session.withTransaction(async () => {
    await db.collection("accounts").updateOne(
      { _id: fromId },
      { $inc: { balance: -amount } },
      { session }
    );
    await db.collection("accounts").updateOne(
      { _id: toId },
      { $inc: { balance: amount } },
      { session }
    );
  });
} finally {
  await session.endSession();
}
```

## Mongoose Schema Example

```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
```

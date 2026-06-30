# Database Guides

Databases store and organize data. Understanding how to design and query databases is essential for every developer.

## SQL Basics

SQL is the standard language for relational databases like PostgreSQL, MySQL, and SQLite.

### Creating Tables

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Querying Data

```sql
SELECT * FROM users WHERE email LIKE '%@example.com';
SELECT name, email FROM users ORDER BY created_at DESC LIMIT 10;
```

### Joins

```sql
SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id
WHERE orders.status = 'completed';
```

### Aggregations

```sql
SELECT 
  status,
  COUNT(*) as count,
  SUM(total) as revenue
FROM orders
GROUP BY status;
```

## NoSQL with MongoDB

MongoDB stores data as documents (JSON-like objects).

### Document Structure

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "orders": [
    { "id": 1, "total": 59.99, "status": "completed" }
  ]
}
```

### Common Operations

```javascript
// Find documents
const users = await db.collection("users").find({ age: { $gt: 18 } }).toArray();

// Insert one
await db.collection("users").insertOne({ name: "John", age: 30 });

// Update
await db.collection("users").updateOne(
  { _id: userId },
  { $set: { name: "Jane" } }
);

// Delete
await db.collection("users").deleteOne({ _id: userId });
```

## Database Design Principles

### Normalization

Organize data to reduce redundancy.

- **1NF**: Each column contains atomic values
- **2NF**: No partial dependencies
- **3NF**: No transitive dependencies

### Indexing

Create indexes to speed up queries.

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

### Transactions

Keep data consistent.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

## Choosing a Database

- **PostgreSQL**: Relational, powerful queries, complex data
- **MySQL**: Popular, fast, widely supported
- **MongoDB**: Flexible schema, rapid iteration
- **Redis**: In-memory caching, sessions, queues

## Related Projects

- [Project 03: Expense Tracker](../projects/expense-tracker.md)
- [Project 04: JWT Auth System](../projects/jwt-auth-system.md)
- [Project 05: CRUD API](../projects/crud-api.md)

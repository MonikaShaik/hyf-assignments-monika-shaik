import express from "express";
import knex from "knex";
import path from "path";

const app = express();
const port = 3000;


// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});

app.get("/", async (req, res) => {

  const rows = await knexInstance.raw("SELECT COUNT(*) AS count FROM users;");
  const count = rows[0].count;

  res.setHeader('Content-Type', 'text/html')
  res.send(`<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User-count</title>
</head>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 24px;
    margin: 20px;
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
  }

  .box {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  #count {
    font-size: 2em;
    color: red;
  }
</style>

<body>
  <div class="box">
    <h2>Total Users</h2>
    <h3 id="count">${count} </h3>
  </div>
</body>

</html>`)
});

// 1. Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// 2. Route for /unconfirmed-users
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE confirmed_at is NULL ORDER BY id ASC;");
  res.json(rows);
});

// 3. Route for /gmail-users
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE email LIKE '%@gmail.com' ORDER BY id ASC;");
  res.json(rows);
});

// 4. Route for /2022-users
app.get("/2022-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE created_at LIKE '2022%' ORDER BY id ASC;");
  res.json(rows);
});

// 5. Route for /user-count
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT COUNT(*) AS count FROM users;");
  res.json(rows);
});


// 6. Route for /last-name-count
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw("SELECT last_name, COUNT(*) AS user_count FROM users GROUP BY last_name ORDER BY last_name ASC;");
  res.json(rows);
});

// 7. Route for /first-user
app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users");
  if (rows.length > 0) {
    res.json(rows[0]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// TODO implement more routes here

// 8. Route for /confirmed-users
app.get("/confirmed-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE confirmed_at is not NULL ORDER BY id ASC;");
  res.json(rows);
});

// 9. Route for /non-customdomain-users
app.get("/non-customdomain-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users WHERE email not LIKE '%@customdomain.com' ORDER BY id ASC;");
  res.json(rows);
});

// 10. Route for /get-users-by-joined-year
app.get("/get-users-by-joined-year", async (req, res) => {
  const year = req.query.year

  const query = `SELECT * FROM users WHERE created_at  LIKE '${year}%' ORDER BY id ASC`;

  const result = await await knexInstance.raw(query)
  res.json(result);

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("response from server. now its running with nodemon");
});

const users = [
  { id: 1, name: "Noman", email: "noman@gamil.com", phone: "123456789" },
  { id: 2, name: "waleed", email: "waleed@gamil.com", phone: "987654321" },
  { id: 3, name: "nasir", email: "nasir@gamil.com", phone: "123459876" },
  { id: 4, name: "iful", email: "iful@gamil.com", phone: "987612345" },
  { id: 5, name: "farhad", email: "farhad@gamil.com", phone: "198283746" },
];

app.get("/users", (req, res) => {
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users[id - 1];
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request : ", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app lisening on port ${port}`);
});

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth"); 

router.post("/register", (req, res) => {
    const { username, password } = req.body;
  
    if (users.some((user) => user.username === username)) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
  
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  });

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey,
    { expiresIn: "1800s" }
  );
  console.log(users);
  res.json({ message: "Login successful", token });
});

router.get("/protected", verifyToken, (req, res) => {
  console.log(req)
  res.json({
    message: "accessing the protected route",
    user: req.user,
  });
});

module.exports = router;

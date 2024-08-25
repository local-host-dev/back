const express = require("express");
const app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const userId = "john_doe_17091999"; // Replace with dynamic generation if required
  const email = "john@xyz.com"; // Replace with actual email
  const rollNumber = "ABCD123"; // Replace with actual roll number

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[A-Za-z]+$/.test(item));
  const lowercaseAlphabets = alphabets.filter(
    (char) => char === char.toLowerCase()
  );
  const highestLowercaseAlphabet = lowercaseAlphabets.length
    ? lowercaseAlphabets.sort().reverse()[0]
    : null;

  res.json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
      ? [highestLowercaseAlphabet]
      : [],
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

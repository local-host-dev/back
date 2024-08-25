const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const userId = "john_doe_17091999";
  const email = "john@xyz.com";
  const rollNumber = "ABCD123";

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

module.exports = app;

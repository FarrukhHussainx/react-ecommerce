const express = require("express");
const cors = require("cors");

const striperoutes = require("./route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/stripe", striperoutes);

app.listen(5000, () => {
  console.log("listening at 5000");
});

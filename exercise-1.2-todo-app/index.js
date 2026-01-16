import express from "express";

const app = express();

// PORT desde variable de entorno o default
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Todo app running");
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
import express from "express";
import { exampleRouter } from "./routes/example.router";

const { PORT, NAME } = process.env;

let app = express();

app.use(exampleRouter);

app.listen(PORT, () => {
  console.log(`${NAME}, the server is listening on port ${PORT}`);
});
console.log("GitHub Workflow is fine.");
console.log("The app is running");
console.log("Finish test5");

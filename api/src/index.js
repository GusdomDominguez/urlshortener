const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Router = require("./routes/index");
const store = require("data-store")({
  path: process.cwd() + "/shortener.json",
});

const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

//rutas
app.use("/", Router);

//inicio de servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

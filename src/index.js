const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

//
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
// Gửi dữ liệu dạng form html thì có urlencoded xử lí
app.use(express.json());
// Http logger
app.use(morgan("combined"));

// XMLHttpRequest, Fetch, Axios: Đây là các phương thức gửi dữ liệu code JS lên phía server
// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Đã khởi động: http://localhost:${port}`);
});

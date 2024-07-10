const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const route = require("./routes");
const db = require("./config/config");
const cors = require("cors");
const logging = require("./config/logging");
const dotenv = require("dotenv");

// Connect to db
db.connect();

//
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors(corsOption));

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
app.set("views", path.join(__dirname, "resources", "views"));

// app.get("/",  (req, res) => {
//   const courses = await Course.find({});
//   res.render("index", { courses });
// });
// Route init
route(app);

app.listen(PORT, () => {
  logging.info(`Đã khởi động: ${PORT}`);
});

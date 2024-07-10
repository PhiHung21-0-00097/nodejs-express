const Course = require("../models/Course");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((course) => res.render("index", { title: "TEST TITLE" }))
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();

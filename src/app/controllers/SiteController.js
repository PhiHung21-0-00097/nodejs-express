const Course = require("../models/Course");
class SiteController {
  async index(req, res) {
    try {
      // const course = new Course({
      //   name: "Phong",
      //   desc: "sdfsdf",
      // });
      // await course.save();
      // console.log("course: ", course);
      const courses = await Course.find({});
      console.log(courses);
      res.json(courses);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "ERROR!!!" });
    }
    // res.render('home');
  }
  //[GET] /news/:slug(slug=biến động)
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();

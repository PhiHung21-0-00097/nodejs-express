class NewsController {
  // [GET] / news
  news(req, res) {
    res.render("news");
  }
  // [GET] /news/:id
  show(req, res) {
    res.send("detailNews");
  }
}
module.exports = new NewsController();

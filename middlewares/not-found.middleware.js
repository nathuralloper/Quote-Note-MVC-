const path = require("path");

function render(file, res) {
  return res
    .status(404)
    .sendFile(path.join(__dirname + `/../views/${file}.html`));
}

module.exports = function (req, res, next) {
  return render("not-found", res);
};

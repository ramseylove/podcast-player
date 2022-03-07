var convert = require("xml-js");
var jsonServer = require("json-server");
// var episodes = require("./episodes.json");
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();

// import episodes from ".episodes.js";

server.use(middlewares);
server.use(router);

router.render = function (req, res) {
  // var episodes = res.locals.episodes;
  const json = require("fs").readFileSync("./episodes.json", "utf-8");
  const options = { compact: true, ignoreComment: true, spaces: 2 };
  var str = convert.json2xml(json, options);
  res.send(str);
};

server.listen(3500, function () {
  console.log("JSON Server is running");
});

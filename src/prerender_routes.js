let years = require("../public/assets/election/years.json");

let routes = [
  "/",
  "/about",
  "/events",
  "/elections"
];

years.forEach(function(year) {
  routes.push("/elections/" + year);
});

module.exports = {
  routes: routes
}

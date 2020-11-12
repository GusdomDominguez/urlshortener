const { Router } = require("express");
const store = require("data-store")({
  path: process.cwd() + "/store.json",
});

router = Router();

router.get("/", (req, res) => {
  const data = store.get();
  const resData = data ? data : { response: "no data" };
  res.json(resData);
});

router.post("/", function (req, res) {
  console.log(req.body);
  const testdata =
    req.body && req.body.testdata ? req.body.testdata : "empty data";
  store.set(req.body.testdata, { testdata });
  res.send("Data saved");
});

module.exports = router;

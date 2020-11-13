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

router.get("/url/:code", (req, res) => {
  const code = req.params.code;
  const url = store.get(code);
  res.redirect(`http://${url}`);
});

router.post("/", function (req, res) {
  console.log(req.body);
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  store.set(result, req.body.url);
  res.send({
    success: true,
    message: `Url acortada en localhost:3000/${result}`,
  });
});

module.exports = router;

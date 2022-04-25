const koaRouter = require("koa-router");
const db = require("./db.json");

const router = new koaRouter({
  prefix: "/report",
});

router.get("/", (ctx) => {
  const userReports = db.map(({ name, email, gender, registered, reports }) => {
    return { name, email, gender, registered, reports };
  });
  //added return keyword here to return data
  ctx.status = 200;
  ctx.body = userReports;
});

module.exports = router;

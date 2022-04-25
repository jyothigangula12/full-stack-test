const koaRouter = require("koa-router");
const db = require("./db.json");

const router = new koaRouter({
  prefix: "/report",
});

router.get("/", (ctx) => {
  const userReports = db.map(
    ({ _id, name, email, gender, registered, reports }) => {
      return { _id, name, email, gender, registered, reports };
    }
  );
  //added return keyword here to return data
  ctx.status = 200;
  ctx.body = userReports;
});
router.post("/", (ctx) => {
  console.log("ctx routes", ctx.request.body);
  ctx.status = 200;
  const patientReport = JSON.parse(ctx.request.body);
  for (i = 0; i <= db.length; i++) {
    console.log("for outer loop", db[i]._id, patientReport.id);
    if (db[i]._id === patientReport.id) {
      console.log("for loop", patientReport.data);
      db[i].reports.push(patientReport.data);
      return;
    }
  }
  //Got data from frontend and pushed to database
});
module.exports = router;

const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const {getStudentInfo} = require('../controller/controller');

app
  .prepare()
  .then(() => {
    const server = express();

    // server.use("/api", showRoutes(server));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/api/getStudentInfo", async (req, res) => {
      const response = await getStudentInfo(req.query.id);
      res.send(response);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on port: ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
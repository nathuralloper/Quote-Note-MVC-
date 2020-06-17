const express = require("express");
const server = express();
const { PORT } = require("./config");

const { HomeRoutes, QuoteRoutes } = require("./routes");
const { NotFoundMiddlewares } = require("./moddlewares");

server.use(express.static("./public"));
server.use(express.json());

server.use("/", HomeRoutes);
server.use("/", QuoteRoutes);
server.use(NotFoundMiddlewares);

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

//MVC

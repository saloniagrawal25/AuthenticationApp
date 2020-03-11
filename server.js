const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
// eslint-disable-next-line no-undef
app = express();
// eslint-disable-next-line no-undef
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 80;
// eslint-disable-next-line no-undef
app.listen(port);

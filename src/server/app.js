import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Page from "../comp/Counter";

const app = express();
app.use(express.static("public"));
const content = renderToString(<Page />);

app.get("/", (req, res) =>
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Isomorphic Rendering Explanation</title>
<link rel="stylesheet" href="/style.css" type="text/css" media="all">
</head>

<body>
  <div class="container">
    <div class="item"><a href="/server-render">Server Render Demo</div>
    <div class="item"><a href="/browser-render">Browser Render Demo</div>
  </div>
</body>
</html>
`)
);

app.get("/browser-render", (req, res) =>
  res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Isomorphic Rendering Explanation</title>
<link rel="stylesheet" href="/style.css" type="text/css" media="all">
</head>
<body>
  <div class="container">
    <h1>Browser Render</h1>
    <div id="root"></div>
  </div>
</body>
<script src="/index.js"></script>
</html>
`)
);

app.get("/server-render", (req, res) =>
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>Isomorphic Rendering Explanation</title>
  <link rel="stylesheet" href="/style.css" type="text/css" media="all">
</head>
<body>
  <div class="container">
    <h1>Server Render</h1>
    <div id="root">${content}</div>
  </div>
</body>
<script src="/index.js"></script>
</html>
`)
);
app.listen(3000, () => console.log("listening on port 3000 ..."));

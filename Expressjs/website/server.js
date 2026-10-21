import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve("web")));

app.get("/", (req, resp) => {
  const absPath = path.resolve("web/index.html");
  resp.sendFile(absPath);
});

app.get("/about", (req, resp) => {
  const absPath = path.resolve("web/about.html");
  resp.sendFile(absPath);
});

app.get("/contact", (req, resp) => {
  const absPath = path.resolve("web/contact.html");
  resp.sendFile(absPath);
});
app.use((req, resp) => {
  const absPath = path.resolve("web/404.html");
  resp.status(404).sendFile(absPath);
});

app.listen(3200);
import http from "http";
import url from "url";
import fs from "fs";

const messages = fs.readFile("./mocks/messages.json", "utf-8");
const parsedMessages = JSON.parse(messages);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/chat") {
    res.end(messages);
  } else if (pathName === "/") {
    res.end("Hello World");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("404");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://localhost:8000/");
});

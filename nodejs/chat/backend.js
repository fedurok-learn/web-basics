"use strict";

const { resolve, extname } = require("path");
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8081;
const PUBLIC_PATH =
  "/home/b1zon/Desktop/discover/manuals/WebDevLearning/nodejs/chat"; // place it directory, where you execute node

const MIME_TYPES = {
  css: "text/css",
  html: "text/html"
};

http
  .createServer((req, res) => {
    const url = req.url === "/" ? "index.html" : req.url.slice(1);
    const path = resolve(PUBLIC_PATH, url);
    const ext = extname(path).slice(1);
    const mimeType = MIME_TYPES[ext] ? MIME_TYPES[ext] : "text/plain";

    fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHeader(400, { "content-type": "text/plain" });
        data = "No such file"
    } else {
        res.writeHeader(200, { "content-type": mimeType })
    }
    
    res.write(data, (err) => res.end());
    });
  })
  .listen(PORT);

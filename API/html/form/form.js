const http = require("http");
const querystring = require("querystring"); 
const formHtml = require("./formsubmit");

let server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(formHtml);
    }
    else if (req.url === "/validate" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const data = querystring.parse(body); 

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                <h1>Data received</h1>
                <p>Username: ${data.username}</p>
                <p>Password: ${data.password}</p>
            `);
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(4800, () => {
    console.log("Server is running on http://localhost:4800");
});
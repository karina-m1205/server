const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end("we learn Node.js");
    };
});
server.listen(3000, function () { console.log("Сервер запущен по адресу http://localhost:3000") });


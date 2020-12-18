const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Hello, Server Side');
    console.log(req.body);
});

server.listen(3000 , () => {
    console.log('Server Is Running on 3000.');
})

const http = require('http');

const server = http.createServer((req,res) => {
    console.log('Hello, Server Side');
    console.log(req.url , req.method, req.headers);
    //console.log(res);
    if(req.url == '/')
    {
        if (req.method == 'POST')
        {
            console.log(req);
            res.setHeader('Content-Type' , 'text/html');
            res.write("<html><title>Anything!</title>");
            res.write("<body><h1>Hello, NodeJs...</h1></body></html>")
            res.end();
        }
        else 
        {
        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><title>Anything!</title>");
        res.write("<body><h1>Hello, NodeJs...</h1></body></html>")
        res.end();
        }
    }
    else if(req.url == '/message')
    {
        res.setHeader('Content-Type' , 'text/html');
        res.write("<html><title>Message</title>");
        res.write("<body><form action = '/' method = 'POST'><input type = 'text' name = 'myinput' placeholder = 'Enter Your Message Here...'>");
        res.write("<input type = 'submit' value = 'Send Message!'> ");
        res.write("</form></body>");
        res.write("</html>");
        return res.end();
    }   
});

server.listen(3000 , () => {
    console.log('Server Is Running onn 3000.');
})

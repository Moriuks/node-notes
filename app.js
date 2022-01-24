const { write } = require('fs');
const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;

    //ROUTING REQUEST
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Moriuks blog</title></head>');
        res.write(`<body><h1>Tell me something</h1><br>
        <form action="/message" method="POST">
        <input name="somethingButton" type="text">
        <button type="submit">ok</button>
        </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Moriuks blog</title></head>');
    res.write('<body><h1>Hello from Moriuks</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);
// Starts with:  node app.js
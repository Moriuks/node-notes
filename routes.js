const fs = require('fs');

const requestHandler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    

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
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          console.log(chunk);
          body.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', message,(err)=>{
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
      }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Moriuks blog</title></head>');
    res.write('<body><h1>Hello from Moriuks</h1></body>');
    res.write('</html>');
    res.end();
}


module.exports = requestHandler;
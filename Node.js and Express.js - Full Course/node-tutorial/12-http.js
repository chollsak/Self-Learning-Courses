const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('Welcome to home page.')
    }
    
    if(req.url === '/about'){
        res.end('Here is our short history.')
    }

    res.end(`
        <h3>Oops!!! 404</h3>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)

});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});

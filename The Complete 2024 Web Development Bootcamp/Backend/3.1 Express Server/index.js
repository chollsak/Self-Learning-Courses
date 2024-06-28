// Creating an Express Server
// 0. Create directory
// 1. Create index.js file.
// 2. initialise NPM.
// 3. Install the Express package.
// 4. Write Server application in index.js
// 5. Start server (using Node COMMAND{node index.js})

// ------------------------------------------------------------------------------


import express from "express";
const app = express();
const port = 3000;



app.listen(port, () => {
    console.log(`Server is running on port ${port}.`); //setting up server, Server gonna listen to port 3000 and once the server set up gonna show on console.log
})

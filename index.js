const server = require('./api/server');

const port = process.env.PORT || 5000;



server.listen(port, () => {
    console.log("\n** api is piping hot**\n")
})
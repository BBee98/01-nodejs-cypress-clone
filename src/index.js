const serve = require("#core/server");

(async function Init(){
    const server = serve.Create()
    server.listen(4800);
})()
const global = require("#constants");

function Create(){
    return global.nodeHttp.createServer(Serve);
}


async function Serve(request, response){
    response.writeHead(200, { 'Content-type': 'application/json;utf-8'});
    const indexTemplateFile = global.nodePath.join(global.nodedProcess.env.TEMPLATE_URL, 'index.html')
    const indexTemplate = await global.nodeFsPromises.readFile(indexTemplateFile)
    response.end(indexTemplate)
}

module.exports = {
    Create,
}
const global = require("#constants");
const {GetEnv} = require("#core/env");

function Create(){
    return global.nodeHttp.createServer(Serve);
}


async function Serve(request, response){
    response.writeHead(200, { 'Content-type': 'application/json;utf-8;text/plain'});
    const templatesDir = await GetEnv({
        argName: "--envDir",
        envName: "TEMPLATE_URL"
    });

    const indexTemplateFile = global.nodePath.join(templatesDir, 'index.html');
    const indexTemplate = await global.nodeFsPromises.readFile(indexTemplateFile);

    response.end(indexTemplate)
}

module.exports = {
    Create,
}
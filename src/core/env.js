const global = require("#constants");

async function GetEnv({argName, envName}) {
    if (!envName || !argName) {
        throw new Error("Se espera el nombre de la variable para ser obtenida")
    }
    const envFileDirectory = GetArgValue(argName);
    const envFileName = ".env";
    const repositoryDirectory = global.nodePath.join(global.nodeProcess.cwd(), envFileDirectory, envFileName);
    const envFile = await global.nodeFsPromises.readFile(repositoryDirectory, { encoding: "utf-8"});
    return GetEnvValue(envFile, envName)
}

function GetArgValue(envName) {
    const envDirVariable = global.nodeProcess.argv.find(arg => arg.includes(envName));
    return envDirVariable.split("=")[1]
}

function GetEnvValue(envFile, envName){
    return envFile.split(`${envName}=`)[1].replace(/'/g, '')
}



module.exports = {GetEnv}
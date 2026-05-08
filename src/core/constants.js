const nodeChildProcess = require("node:child_process");
const nodePath = require("node:path");
const nodedProcess = require("node:process");
const nodeFsPromises = require("node:fs/promises");
const nodeFs = require("node:fs");
const nodeHttp = require("node:http");

module.exports = {
    nodeHttp,
    nodeChildProcess,
    nodedProcess,
    nodeFsPromises,
    nodePath,
    nodeFs
}
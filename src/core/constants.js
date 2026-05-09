const nodeProcess = require("node:process");
const nodeChildProcess = require("node:child_process");
const nodePath = require("node:path");
const nodeFsPromises = require("node:fs/promises");
const nodeFs = require("node:fs");
const nodeHttp = require("node:http");

module.exports = {
    nodeHttp,
    nodeChildProcess,
    nodeProcess,
    nodeFsPromises,
    nodePath,
    nodeFs
}
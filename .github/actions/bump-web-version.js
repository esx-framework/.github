const fs = require("fs");
const path = require('path');
const replace = require('replace-in-file');

const version = process.env.TGT_RELEASE_VERSION;
const newVersion = version.replace("v", "");

const results = replace.sync({
    files: "fxmanifest.lua",
    from: [
        /\bversion\((['"])(.*?)\1\)/gm,  
        /\bversion\s+(.*)$/gm
    ],
    to: `version('${newVersion}')`,
});

console.log(results);

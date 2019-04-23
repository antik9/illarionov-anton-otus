/* Imports */
const fs = require('fs');
const pathMod = require('path');

/* Constants */
const args = process.argv.slice(2);
const rootDir = args[0];

/* Global Variables */
let lockCounter = 1;

/* Functions */
const go = (root, fileTree) => {
    try {
        fs.readdir(root, (err, paths) => {
            if (paths != undefined && observePaths(fileTree, root, paths));
            --lockCounter;
        });
    } catch (err) { --lockCounter; }
};

const observePaths = (fileTree, root, paths) => {
    statLockCounter = paths.length;
    lockCounter += statLockCounter;
    try {
        paths.forEach(__file => {
            const file = pathMod.join(root, __file);
            fs.lstat(file, (err, stat) => {
                if (stat != undefined && push(fileTree, file, stat));
                --lockCounter;
                --statLockCounter;
            });
        });
    } catch (err) { lockCounter -= statLockCounter; }
}

const push = (fileTree, file, stat) => {
    if (stat.isDirectory()) {
        fileTree.dirs.push(file);
        ++lockCounter;
        go(file, fileTree);
    } else {
        fileTree.files.push(file);
    }
}

const sleep = time => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const tree = async root => {
    let rootTree = { dirs: [], files: [] };
    await go(root, rootTree);
    return rootTree;
};

const waitCompletion = async promise => {
    while (lockCounter > 0) { await sleep(10); }
    console.log(await promise);
}

/* Main */
waitCompletion(tree(rootDir));
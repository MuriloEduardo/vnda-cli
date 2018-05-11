#!/usr/bin/env node
 
const lib = require('../lib/index.js');
const gitlab = require('node-gitlab');

const client = gitlab.createPromise({
    api: 'https://gitlab.com/api/v3',
    privateToken: '4ScWD4byz8hNZYirX28u'
});

const [,, ...args] = process.argv;

client.repositoryFiles.list({file_path: 'gulpfile.js', ref: 'master'})
    .then(files => {
        console.log(files);
    })
    .catch(err => {
        throw err;
    });
 
console.log(lib.sayHello(args));
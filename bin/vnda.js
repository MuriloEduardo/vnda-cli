#!/usr/bin/env node
 
const lib = require('../lib/index.js');
const gitlab = require('node-gitlab');

const client = gitlab.createPromise({
    api: 'https://gitlab.com/api/v3',
    privateToken: '4ScWD4byz8hNZYirX28u'
});

const [,, ...args] = process.argv;

client.repositoryBranches.list({id: 4786645})
    .then(function (repository) {
        console.log(repository);
    })
    .catch(function (err) {
        throw err;
    });
 
console.log(lib.sayHello(args));
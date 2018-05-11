#!/usr/bin/env node
 
const lib = require('../lib/index.js');
const gitlab = require('node-gitlab');

const client = gitlab.create({
    api: 'https://gitlab.com/api/v4',
    privateToken: '4ScWD4byz8hNZYirX28u'
});

const [,, ...args] = process.argv;

client.repositoryBranches.list({id: 'front'})
    .then(function (milestones) {
        console.log(milestones);
    })
    .catch(function (err) {
        throw err;
    });
 
console.log(lib.sayHello(args));
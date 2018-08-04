'use strict';

const express = require('express');

const app = express();

const childProcess = require('child_process');

const githubUsername = 'donaldboulton';


app.post('/donaldboulton/DWB', function (req, res) {
    const sender = req.body.sender;
    const branch = req.body.ref;

    if (branch.indexOf('gh-pages') > -1 && sender.login === githubUsername){
        deploy(res);
    }
});

function deploy(res){
    childProcess.exec('cd /DWB && ./deploy.sh', function(err, stdout, stderr){
        if (err) {
            console.error(err);
            return res.send(500);
        }
        res.send(200);
    });
}


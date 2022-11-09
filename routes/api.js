const express = require('express');
const router = express.Router();
const https = require('https');
const useragent = require('express-useragent');
router.use(useragent.express());

//endpoint to fetch information from github users
router.get('/github/userinfo/:user', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': req.useragent
        },
        OAUth: process.env.GITHUB_API_TOKEN
    };
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
});

//endpoint to fetch information from github repositories
router.get('/github/repoinfo/:user/:repo', async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.repo; 
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user +'/'+ reponame,
        headers: {
            'User-Agent': req.useragent
        },
        OAUth: process.env.GITHUB_API_TOKEN
    };
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
});

//endpoint to fetch information from github commits
router.get('/github/commitsinfo/:user/:repo', async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.repo;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame + '/commits',
        headers: {
            'User-Agent': req.useragent
        },
        OAUth: process.env.GITHUB_API_TOKEN
    };
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
});

//endpoint to fetch information from gitlab users
router.get('/gitlab/userinfo/:user', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'gitlab.com',
        path: '/api/v4/users?username=' + user,
        headers: {
            'User-Agent': req.useragent
        },
        OAUth: process.env.GITLAB_API_TOKEN
    };
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
});

//endpoint to fetch information from gitlab repository
router.get('/gitlab/repoinfo/projects', async function (req, res) {
    //const id = req.params.id;
    const options = {
        hostname: 'gitlab.com',
        //path: '/api/v4/projects/'+id+'/repository/tree',
        path: '/api/v4/projects',
        headers: {
            'User-Agent': req.useragent
        },
        OAUth: process.env.GITLAB_API_TOKEN
    };
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
});

module.exports = router;
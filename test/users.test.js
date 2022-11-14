const request = require('supertest');
// app is supposed to point to the app.js file
const app = require('../server.js');

describe('GET /user', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/api/github/userinfo/yannick-m243')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
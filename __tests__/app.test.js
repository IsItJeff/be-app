const db = require('../db/index.js');
const app = require('../app.js');
const request = require('supertest');

describe("API Test" , () => {
    describe("Test 1 :- Connected to API ", () => {
        test("API Connection Sucessful", () => {
            return request(app)
                .get("/api")
                .expect(200)
                .then(({body}) => {
                    expect(body).toEqual({ msg: "API Connection Successful, Welcome Back Commander" })
                })
        })
    })
})
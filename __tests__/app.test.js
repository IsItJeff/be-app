require("dotenv").config()
const app = require('../app.js');
const request = require('supertest');

describe("Not Logged in API Test", () => {

    describe("Test 1 :- Check to see if api/loggin is accessable",() => {
        test("Email or Password is Incorrect", () => {
            return request(app)
                .post("/api/login")
                .send({})
                .expect(200)
                .then(({body})=>{
                    expect(body.msg).toEqual("Email or Password is Incorrect")
                });
        });
    });

    describe("Test 2 :- Check if other endpoints are hidden prior to loggin", () => {
        test("/api Endpoint GET Failed",() => {
            return request(app)
                .get("/api")
                .expect(404)
                .then(({body}) => {
                    expect(body.msg).toEqual("Not Found");
                });
        });

        test("/api/users Endpoint GET Failed", () => {
            return request(app)
                .get("/api/users")
                .expect(404)
                .then(({body}) => {
                    expect(body.msg).toEqual("Not Found");
                });
        });

        test("/api/users/:userId Endpoint GET Failed",() => {
            return request(app)
                .get("/api/users/1")
                .expect(404)
                .then(({body}) => {
                    expect(body.msg).toEqual("Not Found");
                });
        });
    });

    describe("Test 3 :- Check that no data gets POST to database", () => {
        test("/api/users/:userId Endpoint POST Failed", () => {
            return request(app)
                .post("/api/users")
                .send({
                    firstName:"I shouldnt be here",
                    lastName:"error"
                })
                .expect(404)
                .then(({body}) => {
                    expect(body.msg).toEqual("Not Found");
                });
        });
    });

    describe("Test 4 :- Check that no data gets DELETE to database",() => {

        test("/api/users Endpoint DELETE Failed", () => {
            return request(app)
                .delete("/api/users")
                .expect(404)
                .then(({body}) => {
                    expect(body.msg).toEqual("Not Found");
                });
        });
    })
});

describe("Logged in API Test" , () => {
    describe("Test 1 :- Connected to API ", () => {

        test("Logged in to API", () => {
            return request(app)
                .post("/api/login")
                .send({
                    email: process.env.DB_USER_TWO,
                    pass: process.env.DB_PASS_TWO
                })
                .expect(200)
                .then(({body}) => {
                    expect(body.msg).toEqual("Login Successful");
                });
        });

        test("API Connection Sucessful", () => {
            return request(app)
                .get("/api")
                .expect(200)
                .then(({body}) => {
                    expect(body.msg).toEqual("API Connection Successful, Welcome Back Commander");
                });
        });

    });

});

describe("Test 2:- Check CRUD function", () => {
    describe("/api/fabrications/branches", () => {

    //     test("POST", () => {
    //         const branchData = {
    //             branchShape: "Square",
    //             branchHeight: "4000",
    //             branchLength: "2000",
    //             branchAngle: "45",
    //             branchFab: [
    //                 { tubeDataId:[] },
    //                 { rectangleDataId:[] },
    //                 { insulationId:[] },
    //                 { claddingDataId:[] },
    //                 { coneDataId:[] },
    //                 { flangeRingDataId:[] }
    //             ]
    //         };

    //         return request(app)
    //             .post("/api/fabrications/branches")
    //             .send(branchData)
    //             .expect(201)
    //             .then(({body}) => {
    //                 expect(body.msg).toEqual("New Branch Created");
    //             });
    //         });
    });

    describe("/api/fabrications/tubes", () => {
        test("POST" , () => {
            
            const tubeData = {
                type: "",
                innerDiam: 0,
                outterDiam: 340,
                thickness: 3,
                length: 1000,
            };

            return request(app)
                .post("/api/fabrications/tubes")
                .send(tubeData)
                .expect(201)
                .then(({body})=>{
                    expect(body.msg).toEqual("New Tube Created");
                });
            });
        });

});
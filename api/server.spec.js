const supertest = require('supertest');


const server = require('./server.js');

describe('server.js test', () => {
    describe("Get /", () => {
        it("should return 200 ok", () => {
            return supertest(server)
                .get("/api/hobbits")
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it("should return Gaffer Gamgee", () => {
            return supertest(server)
                .get("/api/hobbits")
                .then(res => {
                    expect(res.body).toEqual([{id: 2, name: "Gaffer Gamgee"}])
                })
        })
    })
})
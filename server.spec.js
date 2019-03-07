const request = require("supertest");
const db = require("./db");
const server = require("./server");

describe("db", () => {
  it("should set test env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", async () => {
    it("should return stat 200", async () => {
      const test = await request(server).get("/");
      expect(test.status).toBe(200);
    });
  });

  describe("GET /", () => {
    it("should retun obj", async () => {
      const test = await request(server).get("/");
      expect(test.body.test).toEqual([{ id: 1, name: "Enoka" }]);
    });
  });
});

const request = require("supertest");
const db = require("./db");
const server = require("./server");

describe("db", () => {
  it("should set test env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return stat 200", async () => {
      const test = await request(server).get("/");
      expect(test.status).toBe(200);
    });
  });

  describe("GET /", () => {
    it("should return obj", async () => {
      const test = await request(server).get("/");
      expect(test.body.test).toEqual([{ id: 1, name: "Enoka" }]);
    });
  });

  describe("POST /", () => {
    it("should post data to DB", async () => {
      const data = await request(server)
        .post("/")
        .send({ name: "John" });
      expect(data.body.data).toEqual({ name: "John" });
    });
  });

  describe("POST /", () => {
    it("should get post data status of 200", async () => {
      const data = await request(server)
        .post("/")
        .send({ name: "Ben" });
      expect(data.status).toBe(201);
    });
  });

  describe("DELETE /", () => {
    it("should delete data from db", async () => {
      const data = await request(server).delete("/10");
      expect(data.body).toEqual({ message: "successfully deleted" });
    });
  });

  describe("POST /", () => {
    it("should return data delete status of 200", async () => {
      const data = await request(server).delete("/11");
      expect(data.status).toBe(200);
    });
  });
});

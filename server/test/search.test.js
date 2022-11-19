const request = require("supertest");
const app = require("../index");
jest.setTimeout(20000);

describe("Testing route and response for Search", () => {
  test("Succefully finds a registered user by params", async () => {
    await request(app)
      .get("/api/v1/search/espinalhe1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ password: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ password: "secret" })
        );
      })
      .catch((err) => console.log(err));
  });

  test("404 if user not registered", async () => {
    await request(app)
      .get("/api/v1/search/eslhe1")
      .expect("Content-Type", /json/)
      .expect(404)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "User not registered" })
        );
      })
      .catch((err) => console.log(err));
  });
});

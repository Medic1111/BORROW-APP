const request = require("supertest");
const app = require("../index");
jest.setTimeout(20000);
let testUser = "medic222111";
let testPass = "111111";

describe("Testing the Login route possible instances", () => {
  test("Its successful for registered users with correct credentials", async () => {
    const data = { username: testUser, password: testPass };
    await request(app)
      .post("/api/v1/login")
      .send(data)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).not.toBeNull();
        expect(serverRes.body).toBeTruthy();
        expect(serverRes.body).toEqual(expect.any(Object));

        expect(serverRes.body).toEqual(
          expect.objectContaining({ token: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ user: expect.any(Object) })
        );
      })
      .catch((err) => console.log(err));
  });

  test("No or missing data", async () => {
    const data = { username: "", password: testPass };

    await request(app)
      .post("/api/v1/login")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(422)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "All fields are required" })
        );
      })
      .catch((err) => console.log(err));
  });

  test("Gets 404 when unregistered attempts login", async () => {
    let data = { username: "newonenot", password: "newone" };
    await request(app)
      .post("/api/v1/login")
      .send(data)
      .expect(404)
      .expect("Content-Type", /json/)
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

  test.only("Attempt to login with wrong credentials", async () => {
    let data = { username: "medic222111", password: "112332" };

    await request(app)
      .post("/api/v1/login")
      .send(data)
      .expect(403)
      .expect("Content-Type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: expect.any(String) })
        );
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "Incorrect password" })
        );
      })
      .catch((err) => console.log(err));
  });
});

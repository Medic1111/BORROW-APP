const request = require("supertest");
const app = require("../index");
jest.setTimeout(20000);

const data = {
  lender: "isticanja1t",
  borrower: "yeyoteef",
  status: "pending",
  creation_date: "2022-11-18T04:00:00.000Z",
  due_date: "2022-11-30T04:00:00.000Z",
  amount: "10.00",
  description: "TEST CREATING NEW LOAN",
  payment_date: "2022-11-30",
  transaction_rating: 0,
};

describe("Testing routes and responses for CREATE loan request as", () => {
  test("It successfully creates a new loan", async () => {
    await request(app)
      .post("/api/v1/loan")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(201)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ loan_id: expect.any(Number) })
        );
      })
      .catch((err) => console.log(err));
  });
});

const request = require("supertest");
const app = require("../index");
jest.setTimeout(20000);

const data = {
  loan_id: 1,
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

const noEntryFound = {
  loan_id: 483902752378,
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

describe("Testing routes and responses for UPDATE loan request as", () => {
  test("It successfully update a loan", async () => {
    await request(app)
      .put("/api/v1/loan")
      .send(data)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ loan_id: expect.any(Number) })
        );
      })
      .catch((err) => console.log(err));
  });

  test("It does not update a non existing ID", async () => {
    await request(app)
      .put("/api/v1/loan")
      .send(noEntryFound)
      .expect("Content-Type", /json/)
      .expect(500)
      .then((serverRes) => {
        expect(serverRes.body).toBeDefined();
        expect(serverRes.body).toEqual(expect.any(Object));
        expect(serverRes.body).toEqual(
          expect.objectContaining({ message: "No entry found with that ID" })
        );
      })
      .catch((err) => console.log(err));
  });
});

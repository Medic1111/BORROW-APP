import axios from "axios";
// CONNECTION TO API
// IT IS PROXY: FIND WITH /route

export async function validateToken(token, setIsAuth) {
  console.log(token);
  return await axios
    .get("/api/v1/validate", { headers: { authorization: token } })
    .then((serverRes) => {
      console.log(serverRes.data);
    })
    .catch((err) => {
      console.log(err.response.status);
      err.response.status === 401 && setIsAuth(false);
    });
}

export async function fetchApiTest() {
  return await axios
    .get("/api/v1/test")
    .then((serverRes) => console.log(serverRes.data))
    .catch((err) => console.log(err));
}

export async function createEntry(formData) {
  return await axios
    .post("/api/v1/loan", formData)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
}
export async function logIn(formData) {
  return await axios
    .post("/api/v1/login", formData)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
}

export async function register(formData) {
  return await axios
    .post("api/v1/register", formData)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
}

export async function getUserByUsername(username) {
  return await axios
    .get(`/api/v1/search/${username}`)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
}

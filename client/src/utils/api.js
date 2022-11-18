import axios from "axios";
  // CONNECTION TO API
  // IT IS PROXY: FIND WITH /route

export async function validateToken(token){
  return await axios
    .get("/api/v1/validate", { headers: { authorization: token }})
    .catch((err) => err)
};

export async function createEntry(formData){
    return await axios
      .post("/api/v1/create", formData)
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));

};
export async function logIn(formData){
  return await axios
    .post("/api/v1/login", formData)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message)
    });
};

export async function register(formData){
  return await axios
  .post('api/v1/register', formData)
  .then((serverRes) => console.log(serverRes.data))
  .catch((err)=> console.log(err));
}

export async function getUserByUsername(){
    return await axios
      .get("/api/v1/search")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
};

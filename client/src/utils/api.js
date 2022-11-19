import axios from "axios";
  // CONNECTION TO API
  // IT IS PROXY: FIND WITH /route

// TODO: one specific function for validating a token
// import into each rendered page (to validate if they should or shouldn't have access to said page)
// store token in local storage with expiration date 
// if token is expired OR invalid, redirect to login
export async function validateToken(token){
  return await axios
    .get("/api/v1/validate", { headers: { authorization: token }})
    .catch((err) => err)
};

export async function fetchApiTest(){
    return await axios
      .get("/api/v1/test")
      .then((serverRes) => console.log(serverRes.data))
      .catch((err) => console.log(err));
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
    .then((serverRes) => serverRes.data)
    .catch((err)=> {
      throw new Error(err.response.data.message)
    });
}

export async function getUserByUsername(username){
  return await axios
    .get(`/api/v1/search/${username}`)
    .then((serverRes) => serverRes.data)
    .catch((err) => {
      throw new Error(err.response.data.message)
    });
};


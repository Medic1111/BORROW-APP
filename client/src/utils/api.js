import axios from "axios";

  // CONNECTION TO API
  // IT IS PROXY: FIND WITH /route

// TODO: one specific function for validating a token
// import into each rendered page (to validate if they should or shouldn't have access to said page)
// store token in local storage with expiration date 
// if token is expired OR invalid, redirect to login

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
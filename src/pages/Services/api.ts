// CREATED BY: ANSARI KAMAL

import axios from "axios";

const serverPath = "https://apis.tjcg.in";
const usersPath = "api/users";

export const signUp = async (user: any) => {
  try {
    return await axios.post(`${serverPath}/${usersPath}/register`, user);
  } catch (error) {
    console.log(`Error while calling Signup api.`);
  }
};

export const signIn = async (user: any) => {
  try {
    return await axios.post(`${serverPath}/${usersPath}/signin`, user);
  } catch (error) {
    console.log(`Error while calling Signin api.`);
  }
};

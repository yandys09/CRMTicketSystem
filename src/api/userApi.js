import axios from "axios";

const rootUrl = "localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";

export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);
      resolve(res.data);
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found!!");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      console.log(res);
      resolve(res.data);
      //나중에 지워주기
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
      }
    } catch (error) {
      console.log(error)
      reject(error.message);
    }
  });
};

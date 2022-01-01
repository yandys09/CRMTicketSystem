import axios from "axios";

export const getAllTickets =  () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZS5jb20iLCJpYXQiOjE2NDEwMTk1ODcsImV4cCI6MTY0MTAyMDQ4N30.f__AWX5m2sKrLPOTN-B_Hp0nHWHF1juBa7qv1aa-Ohw",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};



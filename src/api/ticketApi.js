import axios from "axios";

export const getAllTickets =  async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZS5jb20iLCJpYXQiOjE2NDY1NjQzMzgsImV4cCI6MTY0NjU2NTIzOH0.EUxivOJGNGsmdj0sJbMaCbQ73kSXkIGPpXAniFIOL2g",
         
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};



import axios from "axios";

export const isAuth = axios
  .get("http://localhost:5173/loginUser", { withCredentials: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

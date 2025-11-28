import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://blogify-backend-ashen.vercel.app",
});

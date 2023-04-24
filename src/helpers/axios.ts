import axios from "axios";

// Creating an instance of axios with a baseURL to be used throughout the application
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

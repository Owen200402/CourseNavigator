import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://ubcexplorer.io/getAllCourses",
});

export { CanceledError };

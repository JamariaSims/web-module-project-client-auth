import axios from "axios";

const createNewUser = (data) => {
  const token =
    "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";
  return axios.create({
    data: { data },
    baseURL: "http://localhost:5000/api/",
  });
};

export default createNewUser;

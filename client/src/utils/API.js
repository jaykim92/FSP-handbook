import axios from "axios";

function getArticle(id) {
  return axios.get("/hello");
};

export default getArticle;
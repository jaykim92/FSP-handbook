import axios from "axios";

const functions = {
  getArticles(query) {
    return axios.get("/api/articles", { params: { q: query } });
  }
};

export default functions;

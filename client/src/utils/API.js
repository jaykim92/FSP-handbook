import axios from "axios";

const functions = {
  getArticles(queriedTag) {
    return axios.get("/api/articles", { params: { q: queriedTag } });
  }
};

export default functions;

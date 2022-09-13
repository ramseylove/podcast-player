import axios from "axios";
import Axios from "axios";
const API_BASE_PROD = "https://listen-api.listennotes.com/api/v2";

const API_BASE_TEST = "https://listen-api-test.listennotes.com/api/v2";

const Client = (options = {}) => {
  this.options = options;

  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  this.Client = Axios.create({
    baseURL: options.apiKey ? API_BASE_PROD : API_BASE_TEST,
    timeout: 30000,
    headers: {
      "X-ListenAPI-Key": options.apiKey || "",
    },
  });
};

export default Client;

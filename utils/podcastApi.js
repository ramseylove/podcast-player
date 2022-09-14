import Axios from "axios";
const API_BASE_PROD = "https://listen-api.listennotes.com/api/v2";

const API_BASE_TEST =
  "http://localhost:9999/https://listen-api-test.listennotes.com/api/v2";

// export const endpoints = {
//   search: async () =>
// }

const buildParams = ({ params }) => {
  if (params) {
    return {
      q: params.q,
      offset: params.offset || 0,
      len_min: params.len_min || 10,
      type: params.type || "podcast",
    };
  }
};

const Client = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_LISTEN_NOTES_API_KEY
    ? API_BASE_PROD
    : API_BASE_TEST,
  timeout: 30000,
  headers: {
    "X-ListenAPI-Key": process.env.NEXT_PUBLIC_LISTEN_NOTES_API_KEY || "",
  },
});

export const search = async (params) => {
  const param = buildParams(params);

  let response;
  if (params.q) {
    response = await Client.get("/search", { param });
  }
  response.data.results.forEach((result) => {
    return (result["title"] = result.title_original);
  });

  return response.data;
};

export const topPodcasts = async (params) => {
  const response = await Client.get("/best_podcasts", { params });
  return response?.data;
};

//axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

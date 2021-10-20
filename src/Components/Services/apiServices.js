import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = "23035715-e0cb760b48ddc49b0eff80b6c";

function getPictures(query, page) {
  return axios
    .get(
      `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
    )
    .then((resp) => resp.data.hits);
}

const Api = {
  getPictures,
};
export default Api;

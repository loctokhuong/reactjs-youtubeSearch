import axios from "axios";

const KEY = "AIzaSyBXVNDx2bgzecAjz1uCRScJKKDQtwUugmg";
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
export default youtube;

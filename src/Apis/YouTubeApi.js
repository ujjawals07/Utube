import axios from "axios";

const KEY = "AIzaSyCu9wAWhBhTav42RQ2qtOThDbh-QbX4AW0";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBSe8i-ObHLyxdTFb3XHK0msnFoAPH_hXI",
 },

});

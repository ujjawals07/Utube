import axios from "axios";
//AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBSe8i-ObHLyxdTFb3XHK0msnFoAPH_hXI",
  },
});

//AIzaSyBSe8i-ObHLyxdTFb3XHK0msnFoAPH_hXI
export const utube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyB58Gnlbpj6J4GE0KG0AC4PNy7LzRB_ewY",
  },
});

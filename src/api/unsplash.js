import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID N5A-Uhs3mVXkFsjcEzT7nvgh_5DAKanD1TefRyAzeOU"
  }
});

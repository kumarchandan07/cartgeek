import axios from "axios";

const getApiData = (url) => {
    const apiURL = url;
    axios.post(apiURL).then((res) => {
      return res.data.data;
      
    }).catch((error) => {
      console.log("error", error)
      return {};
    })
  }
  export default getApiData;
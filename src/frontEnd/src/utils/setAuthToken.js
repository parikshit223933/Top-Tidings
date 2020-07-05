import axios from "axios";

//set and delete the Authorization header for our axios requests 
//depending on whether a user is logged in or not
const setAuthToken = token => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } 
    else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
};
  
export default setAuthToken;
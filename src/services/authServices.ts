import axios from "~/utility/Axios/NestjsAPI";

function handleRegister() {
    return axios.post(`/auth/register`,{
        userName : "Kusakari",
        email : "Welcome"
    });
  }

  export default {
    handleRegister,
    
  };
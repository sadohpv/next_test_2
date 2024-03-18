import axios from "~/utility/Axios/NestjsAPI";

interface RegisterData {
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  gender: boolean;
}
interface LoginData {
  account: string;
  password: string;
  type: boolean;
}
interface ResponseRegister {
  result: {
    EC: number;
    MS: string;
  };
}
interface ResponseLogin {
  result?: {
    EC: number;
    MS: string;
  };
  status: number;
  data?: {
    EC: number;
    MS: string;
  };
}

function handleRegister(
  account: string,
  password: string,
  phone: string,
  username: string,
  address: string,
  gender: boolean
) {
  const data: RegisterData = {
    userName: username,
    email: account,
    password: password,
    phoneNumber: phone,
    address: address,
    gender: gender,
  };

  return axios.post<ResponseRegister, ResponseRegister>(`/auth/register`, data);
}
function handleLogin(account: string, password: string, type: boolean) {
  const data: LoginData = {
    account: account,
    password: password,
    type: type,
  };

  return axios.post<ResponseLogin, ResponseLogin>(`/auth/login`, data);
}
export default {
  handleRegister,
  handleLogin,
};

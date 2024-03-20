import { cookies } from "next/headers";
import { LOGIN, REFRESH } from "../actions/authAction";
interface AuthState {
  auth: boolean | null | string;
  token: string | null;
}

const INITIAL_STATE: AuthState = {
  auth: false,
  token: null,
};

const authReducer = (state: AuthState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN:
      sessionStorage.setItem("auth", action.data.auth);

      return {
        ...state,
        auth: action.data.auth,
        token: action.data.token,
      };
    case REFRESH:
      sessionStorage.setItem("auth", action.data.auth);

      return {
        ...state,
        auth: action.data.auth,
      };
    default:
      return state;
  }
};
export default authReducer;

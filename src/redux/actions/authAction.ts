const LOGIN: string = "LOGIN";
const REFRESH: string = "REFRESH";

export { LOGIN,REFRESH };

export const handleLoginRedux = (auth: boolean, token: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: LOGIN,
      data: {
        auth,
        token,
      },
    });
  };
};

export const handleRefreshRedux = (auth: boolean) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: REFRESH,
      data: {
        auth,
        
      },
    });
  };
};

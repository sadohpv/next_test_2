const CHANGE_LANGUAE: string = "CHANGE_LANGUAE";
const CHANGE_THEME: string = "CHANGE_THEME";
const CLOUD_RAIN: string = "CLOUD_RAIN";
const GOJO: string = "GOJO";
export { CHANGE_LANGUAE, CHANGE_THEME, CLOUD_RAIN, GOJO };

export const changeLanguageRedux = (language: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: CHANGE_LANGUAE,
      language,
    });
  };
};

export const changeThemeRedux = (theme: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: CHANGE_THEME,
      theme,
    });
  };
};


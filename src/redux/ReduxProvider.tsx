"use client";
import { Provider } from "react-redux";
import store from "./store";
import AuthWrapper from "~/components/Auth/AuthWrapper";
function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthWrapper>{children}</AuthWrapper>
    </Provider>
  );
}

export default ReduxProvider;

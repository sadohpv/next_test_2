"use client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { handleRefreshRedux } from "~/redux/actions/authAction";
function AuthWrapper({ children }: { children: React.ReactNode }) {
//   const dispatch = useDispatch<any>();
//   const auth = useSelector<any>((state) => state.auth.auth);
//   const router = useRouter();
  
//   useEffect(() => {
//     if (localStorage.getItem("auth") == "true") {
//         dispatch(handleRefreshRedux(true));
//       }
//   }, []);
//   if (auth) {
    return <>{children}</>;
//   } else {
//     router.push("/login");
//   }
}

export default AuthWrapper;

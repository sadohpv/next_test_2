import { NextResponse, type NextRequest } from "next/server";
import { privateRoutes, publicRoutes } from "./utility/routes/routes";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const privateRouters = privateRoutes;
  const publicRouters = publicRoutes;

  if (publicRouters.includes(path)) {
    //If is public path
    return NextResponse.next();
  } else {
    if (request.cookies.get("nextjs")) {
      console.log("Cookie exist");
    } else {
      console.log("Cookies don't exist");

      // return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // console.log(path);

  // if (

  //   request.nextUrl.pathname.startsWith("/login") === false
  // ) {
  //   console.log("Navigate Login : ", request.nextUrl.pathname);

  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
  // matcher: ["/", "/:user*"],
};

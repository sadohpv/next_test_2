import type { Metadata } from "next";
import "./globals.css";

import styles from "$app/App.module.scss";
import classNames from "classnames/bind";

import IntlProviderWrapper from "~/utility/Language/IntlProviderWrapper";
import ReduxProvider from "~/redux/ReduxProvider";
import ThemeProviderWrapper from "~/utility/Themes/ThemeProvider";
import AuthWrapper from "~/components/Auth/AuthWrapper";
import NavbarSearch from "~/components/Navbar/NavbarSearch";
import Navbar from "~/components/Navbar/Navbar";
const cx = classNames.bind(styles);
export const metadata: Metadata = {
  title: "ABC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={cx("boss")}>
          <ReduxProvider>
            <ThemeProviderWrapper>
              <div className={cx("body")}>
                <IntlProviderWrapper>
                  <AuthWrapper>
                    <>
                      <nav>
                        <NavbarSearch />

                        <Navbar />
                      </nav>
                      {children}
                    </>
                  </AuthWrapper>
                </IntlProviderWrapper>
              </div>
            </ThemeProviderWrapper>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

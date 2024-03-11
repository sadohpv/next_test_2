"use client";
import classNames from "classnames/bind";
import styles from "$app/App.module.scss";
import { useWindowSize } from "usehooks-ts";
import Avatar from "~/components/Avatar/Avatar";
import { useEffect, useState } from "react";
import { CopyRightIcon } from "~/assets/icon";
import Submain from "~/components/App/Submain";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import NavbarSearch from "~/components/Navbar/NavbarSearch";
import Navbar from "~/components/Navbar/Navbar";

const cx = classNames.bind(styles);

export default function Home() {
  // const submain = useMediaQuery("(min-width: 1160px)");
  // console.log(submain);
  const [submain, setSubmain] = useState<boolean>(true);
  const { width = 0, height = 0 } = useWindowSize();
  useEffect(() => {
    if (width >= 1160) {
      setSubmain(true);
    } else {
      setSubmain(false);
    }
  }, [width]);
  useEffect(() => {
    if (width >= 1160) {
      setSubmain(true);
    } else {
      setSubmain(false);
    }
  }, []);
  //  console.log(width);
  // const theme = useSelector((state:any) =>state.app.theme);

  return (
    <>
      <nav>
        <NavbarSearch />

        <Navbar />
      </nav>
      <div className={cx("wrapper")}>
        <div className={cx("main")}></div>
        {submain && <Submain />}
      </div>
    </>
  );
}

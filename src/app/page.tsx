"use client";
import classNames from "classnames/bind";
import styles from "$app/App.module.scss";
import { useWindowSize } from "usehooks-ts";
import Avatar from "~/components/Avatar/Avatar";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

export default function Home() {
  // const submain = useMediaQuery("(min-width: 1160px)");
  // console.log(submain);
  const [submain, setSubmain] = useState<boolean>(false);
  const { width = 0, height = 0 } = useWindowSize();
  useEffect(() => {
    if (width >= 1160) {
      setSubmain(true);
    } else {
      setSubmain(false);
    }
  }, [width]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}></div>
      {submain && (
        <div className={cx("sub_main")}>
          <div className={cx("sub_header")}>
            <Avatar
              size={28}
              src={"https://wallpaperset.com/w/full/e/a/7/444549.jpg"}
            />
            <div className={cx("header_infor")}>
              <div className={cx("text")}>
                <span>KUSAKARI</span>
              </div>
              <div className={cx("text")}>
                <span>kusakari2110@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={cx("sub_body")}></div>
          <div className={cx("sub_footer")}>
            <div className={cx("sologan")}>
              <span>
                It's strange, I can't remember my own name but for some reason I
                can't forget yours
              </span>
            </div>
            <div className={cx("copyright")}>
              <div className={cx("copyright_icon")}></div>
              <div className={cx("copyright_title")}>
                <span>2024 ZOOI FROM KUSAKRI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import classNames from "classnames/bind";
import styles from "$app/App.module.scss";

import Avatar from "~/components/Avatar/Avatar";
import { CopyRightIcon } from "~/assets/icon";
// import UserCard from "../UserCard/UserCard";
import { FormattedMessage } from "react-intl";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UserCardSubmain from "../UserCard/UserCardSubmain";
// import "swiper/css/autoplay";
const cx = classNames.bind(styles);

const listQuote = [
  {
    id: 1,
    quote: <FormattedMessage id="Quotes.quote_1" />,
  },
  {
    id: 2,
    quote: <FormattedMessage id="Quotes.quote_2" />,
  },
  {
    id: 3,
    quote: <FormattedMessage id="Quotes.quote_3" />,
  },
];

export default function Submain() {
  return (
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
      <div className={cx("sub_body")}>
        <div className={cx("recommend")}>
          <div className={cx("recommend_title")}>
            <span>
              <FormattedMessage id="Submain.suggested" />
            </span>
          </div>
          <div className={cx("recommend_button")}>
            <span>
              <FormattedMessage id="Submain.see_all" />
            </span>
          </div>
        </div>
        <UserCardSubmain />
      </div>
      <div className={cx("sub_footer")}>
        <div className={cx("sologan")}>
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            grabCursor={true}
            effect="coverflow"
          >
            {listQuote.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={cx("quote")}>
                  <span>{item.quote}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={cx("copyright")}>
          <div className={cx("copyright_icon")}>
            <CopyRightIcon width="14" height="14" />
          </div>
          <div className={cx("copyright_title")}>
            <span>2024 ZOOI FROM KUSAKARI</span>
          </div>
        </div>
      </div>
    </div>
  );
}

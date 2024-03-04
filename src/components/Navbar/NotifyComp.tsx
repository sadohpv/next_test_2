"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/NotifyComp.module.scss";
import { HeartIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import TippyCustom from "~/utility/TooltipCustom";
const cx = classNames.bind(styles);
interface NotifyCompProps {
  setModal: (modal: boolean) => void;
  modal: boolean;
  page: number;
  tippy: boolean | null;

  setPage: (page: number) => void;
}

const NotifyComp: FC<NotifyCompProps> = ({
  setModal,
  modal,
  page,
  setPage,
  tippy,
}) => {
  const [active, setActive] = useState<boolean>(false);
  // console.log(router);
  const router = usePathname();
  const handleToggle = () => {
    if (page === 2) {
      setPage(0);
      setModal(false);
    } else {
      setPage(2);
      setModal(true);
    }
  };
  return tippy!==null ? (
    <TippyCustom content={"Notify"} place={tippy === true ? "top" : "right"}>
      <div
        className={cx("nav_item", modal && "active", page === 2 && "border")}
        onClick={handleToggle}
      >
        <div className={cx("icon")}>
          <HeartIcon fill={page === 2 ? "var(--text-color)" : "none"} />
        </div>
        <span>Notify</span>
      </div>
    </TippyCustom>
  ) : (
    <div
      className={cx("nav_item", modal && "active", page === 2 && "border")}
      onClick={handleToggle}
    >
      <div className={cx("icon")}>
        <HeartIcon fill={page === 2 ? "var(--text-color)" : "none"} />
      </div>
      <span>Notify</span>
    </div>
  );
};

export default NotifyComp;

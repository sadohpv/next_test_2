"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/CreateComp.module.scss";
import { CreateIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState, useEffect } from "react";
import TippyCustom from "~/utility/TooltipCustom";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
const cx = classNames.bind(styles);
interface CreateCompProps {
  setModal: (modal: boolean) => void;
  modal: boolean;
  tippy: boolean | null;

  page: number;
  setPage: (page: number) => void;
}

const CreateComp: FC<CreateCompProps> = ({
  setModal,
  modal,
  page,
  setPage,
  tippy,
}) => {
  // console.log(router);

  const router = usePathname();
  const handleToggle = () => {
    if (page === 3) {
      setPage(0);
      setModal(false);
    } else {
      setPage(3);
      setModal(true);
    }
  };

  return tippy !== null ? (
    <TippyCustom content={"Create"} place={tippy === true ? "top" : "right"}>
      <div
        className={cx("nav_item", modal && "active", page === 3 && "border")}
        onClick={handleToggle}
      >
        <div className={cx("icon")}>
          <CreateIcon
            fill={page === 3 ? "var(--text-color)" : "none"}
            strokeWidth={page === 3 ? "2.5" : "1.5"}
          />
        </div>
        <span>Create</span>
      </div>
    </TippyCustom>
  ) : (
    <div
      className={cx("nav_item", modal && "active", page === 3 && "border")}
      onClick={handleToggle}
    >
      <div className={cx("icon")}>
        <CreateIcon
          fill={page === 3 ? "var(--text-color)" : "none"}
          strokeWidth={page === 3 ? "2.5" : "1.5"}
        />
      </div>
      <span>Create</span>
    </div>
  );
};

export default CreateComp;

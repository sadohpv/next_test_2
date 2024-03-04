"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/SearchComp.module.scss";
import { SearchIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import TooltipCustom from "~/utility/TooltipCustom";
const cx = classNames.bind(styles);
interface SearchCompProps {
  setModal: (modal: boolean) => void;
  modal: boolean;
  tippy: boolean | null;
  page: number;
  setPage: (page: number) => void;
}

const SearchComp: FC<SearchCompProps> = ({
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
    if (page === 1) {
      setPage(0);
      setModal(false);
    } else {
      setPage(1);
      setModal(true);
    }
  };
  return tippy !==null ? (
    <TooltipCustom content="Search" place={tippy === true ? "top" : "right"}>
      <div
        className={cx("nav_item", modal && "active", page === 1 && "border")}
        onClick={handleToggle}
      >
        <div className={cx("icon")}>
          <SearchIcon
            fill={page === 1 ? "var(--text-color)" : "none"}
            strokeWidth={page === 1 ? "3" : "none"}
          />
        </div>
        <span>Search</span>
      </div>
    </TooltipCustom>
  ) : (
    <div
      className={cx("nav_item", modal && "active", page === 1 && "border")}
      onClick={handleToggle}
    >
      <div className={cx("icon")}>
        <SearchIcon
          fill={page === 1 ? "var(--text-color)" : "none"}
          strokeWidth={page === 1 ? "3" : "none"}
        />
      </div>
      <span>Search</span>
    </div>
  );
};

export default SearchComp;

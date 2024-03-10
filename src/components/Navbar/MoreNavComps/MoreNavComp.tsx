"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/MoreNavComp.module.scss";
import { SettingIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import TooltipCustom from "~/utility/Tippy/TooltipCustom";
import { FormattedMessage } from "react-intl";

import MoreNavModal from "./MoreNavModal";
const cx = classNames.bind(styles);
interface SettingCompProps {
  setModal: (modal: boolean) => void;
  modal: boolean;
  tippy: boolean | null;
  page: number;
  setPage: (page: number) => void;
}

const SettingComp: FC<SettingCompProps> = ({
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
    if (page === 4) {
      setPage(0);
      // setModal(false);
    } else {
      setPage(4);
      // setModal(true);
    }
  };
  return tippy !== null ? (
    <>
      {page === 4 && (
        <div className={cx("modal")}>
          <MoreNavModal />
        </div>
      )}
      <TooltipCustom
        content={<FormattedMessage id="Navbar.more" />}
        place={tippy === true ? "top" : "right"}
      >
        <div
          className={cx("nav_item", modal && "active", page === 4 && "border")}
          onClick={handleToggle}
        >
          <div className={cx("icon")}>
            <SettingIcon
            // fill={page === 1 ? "var(--text-color)" : "none"}
            // strokeWidth={page === 1 ? "3" : "none"}
            />
          </div>
          <span>
            <FormattedMessage id="Navbar.more" />
          </span>
        </div>
      </TooltipCustom>
    </>
  ) : (
    <>
      {page === 4 && (
        <div className={cx("modal")}>
          <MoreNavModal />
        </div>
      )}
      <div
        className={cx("nav_item", modal && "active", page === 4 && "border")}
        onClick={handleToggle}
      >
        <div className={cx("icon")}>
          <SettingIcon />
        </div>
        <span>
          <FormattedMessage id="Navbar.more" />
        </span>
      </div>
    </>
  );
};

export default SettingComp;

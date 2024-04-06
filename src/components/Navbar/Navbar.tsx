"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./styles/Navbar.module.scss";
import {
  CreateIcon,
  HeartIcon,
  HomeIcon,
  LogoIcon,
  SearchIcon,
} from "~/assets/icon";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import NotifyComp from "./NotifyComps/NotifyComp";
import SearchComp from "./SearchComps/SearchComp";
import CreateComp from "./CreateComps/CreateComp";
import MoreNavComp from "./MoreNavComps/MoreNavComp";
import { useWindowSize } from "usehooks-ts";
import TooltipCustom from "~/utility/Tippy/TooltipCustom";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function Navbar() {
  const [page, setPage] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [tippy, setTippy] = useState<boolean | null>(false);
  const [navLast, setNavLast] = useState<boolean | null>(true);
  const { width = 0, height = 0 } = useWindowSize();
  const router = usePathname();
  const handleNavigate = () => {
    if (page !== 0) {
      setPage(0);
    }
    if (modal == true) {
      // console.log("Here");
      setModal(false);
    }
  };
  useEffect(() => {
    if (width < 768) {
      setNavLast(false);
      setTippy(true);
    } else if (width < 1260) {
      setTippy(false);
    } else {
      setTippy(null);
    }
    if (width >= 768) {
      setNavLast(true);
    }
  }, []);
  useEffect(() => {
    if (width < 768) {
      setTippy(true);
    } else if (width < 1260) {
      setNavLast(true);

      setTippy(false);
    } else {
      setNavLast(true);

      setTippy(null);
    }
    if (width > 768) {
      setNavLast(true);
    } else {
      setNavLast(false);
    }
  }, [width]);
  return (
    <div className={cx("navbar", modal && "short")}>
      <div className={cx("nav_first")}>
        <Link href={"/"} onClick={handleNavigate}>
          <div className={cx("logo")}>
            <div className={cx("logo_icon")}>
              <LogoIcon />
            </div>
            <div className={cx("logo_title")}>
              <span>ZOOI</span>
            </div>
          </div>
        </Link>
        <div className={cx("nav_box")}>
          <Link
            className={cx("nav_item", page === 0 && "disable")}
            href={"/"}
            onClick={handleNavigate}
          >
            <div className={cx("icon")}>
              {page === 0 && router === "/" && (
                <HomeIcon fill={"var(--text-color)"} />
              )}
              {(page !== 0 || router !== "/") && <HomeIcon />}
            </div>
            <span>
              <FormattedMessage id="Navbar.home" />
            </span>
          </Link>

          <SearchComp
            page={page}
            setPage={setPage}
            setModal={setModal}
            modal={modal}
            tippy={tippy}
          />

          <NotifyComp
            page={page}
            setPage={setPage}
            setModal={setModal}
            modal={modal}
            tippy={tippy}
          />

          <CreateComp
            page={page}
            setPage={setPage}
            setModal={setModal}
            modal={modal}
            tippy={tippy}
          />
        </div>
      </div>
      {navLast === true && (
        <div className={cx("nav_last")}>
          <MoreNavComp tippy={tippy} modal={modal} position="top" />
        </div>
      )}
    </div>
  );
}

export default Navbar;

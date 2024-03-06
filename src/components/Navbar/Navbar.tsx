"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/Navbar.module.scss";
import { CreateIcon, HeartIcon, HomeIcon, SearchIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import NotifyComp from "./NotifyComp";
import SearchComp from "./SearchComp";
import CreateComp from "./CreateComp";
import { useWindowSize } from "usehooks-ts";
import TooltipCustom from "~/utility/Tippy/TooltipCustom";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import { FormattedMessage } from "react-intl";
const cx = classNames.bind(styles);

function Navbar() {
  const [page, setPage] = useState<number>(0);
  // console.log(router);
  const [modal, setModal] = useState<boolean>(false);
  // const [p]
  const [tippy, setTippy] = useState<boolean | null>(false);

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
      setTippy(true);
    } else if (width < 1260) {
      setTippy(false);
    } else {
      setTippy(null);
    }
  }, [width]);
  return (
    <div className={cx("navbar", modal && "short")}>
      <div className={cx("logo")}>Logo ZOOI</div>
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
            <FormattedMessage id="Navbar.home"/>
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
  );
}

export default Navbar;

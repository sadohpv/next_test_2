"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/NavbarSearch.module.scss";
import { CreateIcon, HeartIcon, HomeIcon, SearchIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NotifyComp from "./NotifyComps/NotifyComp";
import SearchComp from "./SearchComps/SearchComp";
import CreateComp from "./CreateComps/CreateComp";
import { useMediaQuery } from "usehooks-ts";
const cx = classNames.bind(styles);

function NavbarSearch() {
  const [page, setPage] = useState<number>(0);
  // console.log(router);
  const [modal, setModal] = useState<boolean>(false);
  // const [p]
  const matches = useMediaQuery("(max-width: 768px)");
  // console.log(matches);
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

  return (
    <>
      {matches && (
        <div className={cx("navbar_search")}>
          <Link href="/" className={cx("logo")}>
            Logo ZOOI
          </Link>
          <div className={cx("search_box")}></div>
        </div>
      )}
    </>
  );
}

export default NavbarSearch;

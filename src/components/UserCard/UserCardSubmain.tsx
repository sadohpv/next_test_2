import classNames from "classnames/bind";
import styles from "$comp/Card/UserCardSubmain.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import UserCardHover from "./UserCardHover";
import { FormattedMessage } from "react-intl";
import UserCard from "./UserCard";
const cx = classNames.bind(styles);

export default function UserCardSubmain() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <UserCard />
      </div>
      <div className={cx("button_follow")}>
        <span>
          <FormattedMessage id="Common.Follow" />
        </span>
      </div>
    </div>
  );
}

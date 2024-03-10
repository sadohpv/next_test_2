import classNames from "classnames/bind";
import styles from "$comp/Card/UserCard.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import UserCardHover from "./UserCardHover";
import { FormattedMessage } from "react-intl";
const cx = classNames.bind(styles);

export default function UserCard() {
  return (
    <div className={cx("wrapper")}>
      <span>
        <TippyCustom
          content={<UserCardHover />}
          haveClick
          theme="element"
          place="bottom-start"
        >
          <div className={cx("avatar")}>
            <Avatar size={32} />
          </div>
        </TippyCustom>
      </span>
      <div className={cx("infor")}>
        <Link href={`/#`} className={cx("username")}>
          <span>kusa.kari.2110</span>
        </Link>

        <div className={cx("fullname")}>
          <span>
            <FormattedMessage id="Submain.suggested" />
          </span>
        </div>
      </div>
    </div>
  );
}

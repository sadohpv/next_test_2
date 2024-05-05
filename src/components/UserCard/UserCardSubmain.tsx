import classNames from "classnames/bind";
import styles from "./style/UserCardSubmain.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import UserCardHover from "./UserCardHover";
import { FormattedMessage } from "react-intl";
import UserCard from "./UserCard";
import { FC } from "react";
const cx = classNames.bind(styles);
interface UserCardSubmainProps {
  data: any;

}

const UserCardSubmain: FC<UserCardSubmainProps> = ({data}) => {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("main")}>
          <UserCard data={data}/>
        </div>
        <div className={cx("button_follow")}>
          <span>
            <FormattedMessage id="Common.Follow" />
          </span>
        </div>
      </div>
    );
  }
export default UserCardSubmain;
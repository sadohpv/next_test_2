import classNames from "classnames/bind";
import styles from "./style/UserCardHover.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import { FormattedMessage } from "react-intl";
import { FC, useEffect, useState } from "react";
const cx = classNames.bind(styles);
interface UserCardHoverProps {
  data: any;

}

const UserCardHover: FC<UserCardHoverProps> = ({ data }) => {
  const [follow, setFollow] = useState<boolean | null>(null);
  console.log(data);
  const toggleFollow = (value: boolean) => {
    setFollow(value);
    if (value === true) {
      alert("Call Api Follow");
    } else {
      alert("Call Api Unfollow");
    }
  };
  useEffect(() => {
    setFollow(false);
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("avatar")}>
          <Avatar link={data.slug} size={44} />
        </div>
        <div className={cx("infor")}>
          <Link href={`/${data.slug}`} className={cx("username")}>
            <span>{data.slug}</span>
          </Link>

          <div className={cx("fullname")}>
            <span>{data.userName}</span>
          </div>
        </div>
      </div>
      <div className={cx("middle")}>
        <div className={cx("middle_item")}>
          <div className={cx("number")}>
            <span>{data.countPost}</span>
          </div>
          <div className={cx("text")}>
            <span>
              <FormattedMessage id="Common.posts" />
            </span>
          </div>
        </div>
        <div className={cx("middle_item")}>
          <div className={cx("number")}>
            <span>{data.countFollower}</span>
          </div>
          <div className={cx("text")}>
            <span>
              <FormattedMessage id="Common.followers" />
            </span>
          </div>
        </div>
        <div className={cx("middle_item")}>
          <div className={cx("number")}>
            <span>{data.countFollowing}</span>
          </div>
          <div className={cx("text")}>
            <span>
              <FormattedMessage id="Common.following" />
            </span>
          </div>
        </div>
      </div>
      <div className={cx("last")}>
        <div className={cx("last_item")}>
          <img
            src={
              "https://wallpapercosmos.com/w/full/1/f/8/1198865-2230x1080-desktop-dual-screen-studio-ghibli-background.jpg"
            }
            alt="last_1"
          />
        </div>
        <div className={cx("last_item")}>
          <img
            src={
              "https://wallpapercosmos.com/w/full/e/d/3/1198701-1920x1080-desktop-full-hd-studio-ghibli-background-photo.jpg"
            }
            alt="last_2"
          />
        </div>
        <div className={cx("last_item")}>
          <img
            src={
              "https://wallpapercosmos.com/w/full/b/2/2/33006-1920x1080-desktop-1080p-the-garden-of-words-background.jpg"
            }
            alt="last_3"
          />
        </div>
      </div>
      <div className={cx("action")}>
        {follow !== null && follow === false && (
          <div className={cx("button")} onClick={() => toggleFollow(true)}>
            <span>
              <FormattedMessage id="Common.Follow" />
            </span>
          </div>
        )}
        {follow !== null && follow === true && (
          <div className={cx("button")} onClick={() => toggleFollow(false)}>
            <span>
              <FormattedMessage id="Common.Unfollow" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default UserCardHover;
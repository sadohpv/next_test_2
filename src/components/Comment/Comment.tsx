import classNames from "classnames/bind";
import styles from "./CommentCard.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";

import { FormattedMessage, FormattedNumber } from "react-intl";
import { FC, useState } from "react";
import ShowMoreText from "react-show-more-text";
import { HeartIcon, HeartIconFill, ThreeDotsIcon } from "~/assets/icon";

const cx = classNames.bind(styles);

interface CommentCard {
  data?: object;
}
const CommentCard: FC<CommentCard> = ({ data }) => {
  const [like, setLike] = useState<boolean>(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <Avatar size={32} />
      </div>
      <div className={cx("main")}>
        <div className={cx("content")}>
          <div className={cx("text")}>
            <ShowMoreText
              lines={3}
              more={<FormattedMessage id="Common.ShowMore" />}
              less={<FormattedMessage id="Common.ShowLess" />}
              expanded={false}
              truncatedEndingComponent={"..."}
              anchorClass={cx("more_less-button")}
            >
              <p>
                There are many variations of passages of Lorem as Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour There are many variations of passages
                of Lorem as Ipsum available, but the majority have suffered
                alteration in some form, by injected humourThere are many
                variations of passages of Lorem as Ipsum available, but the
                majority have suffered alteration in some form, by injected
                humour
              </p>
            </ShowMoreText>
          </div>
          <div className={cx("like")}>
            <div
              className={cx("like_button", like && "heartAnimation")}
              onClick={handleLike}
            >
              {like ? (
                <HeartIconFill width="16px" height="16px" />
              ) : (
                <HeartIcon width="16px" height="16px" />
              )}
            </div>
            <div className={cx("more_button")} onClick={handleLike}>
              <ThreeDotsIcon width="16px" height="16px" />
            </div>
          </div>
        </div>
        <div className={cx("infor")}>
          <div className={cx("day")}>
            <p>2 days ago</p>
          </div>
          <div className={cx("like_number")}>
            <p>
              <FormattedNumber
                notation="compact"
                maximumFractionDigits={2}
                value={1234}
              />
              <FormattedMessage id="Post.Likes" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;

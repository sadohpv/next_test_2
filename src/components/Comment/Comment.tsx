import classNames from "classnames/bind";
import styles from "./CommentCard.module.scss";

import Avatar from "~/components/Avatar/Avatar";

import Link from "next/link";
import TippyCustom from "~/utility/Tippy/TooltipCustom";

import { FormattedMessage, FormattedNumber } from "react-intl";
import { FC, useState } from "react";
import ShowMoreText from "react-show-more-text";
import { HeartIcon, HeartIconFill, ThreeDotsIcon } from "~/assets/icon";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import commentServices from "~/services/commentServices";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);

interface CommentCard {
  data?: any;
  likeCheck: boolean;
  deleteCommentCount?: any;
  index?: any;
}
const CommentCard: FC<CommentCard> = ({ index, data, likeCheck = false, deleteCommentCount }) => {
  const [like, setLike] = useState<boolean>(likeCheck);
  const [modal, setModal] = useState<boolean>(false);
  const [likeNumber, setLikeNumber] = useState(data.likeNumber);
  const [confirm, setConfirm] = useState(false);
  const [confirmType, setConfirmType] = useState(false);
  const language = useSelector<any>(state => state.app.language);
  const idUser = useSelector<any>(state => state.auth.data.id);

  const handleLike = async () => {
    setLike(!like);
    const payload = {
      userId: idUser,
      comId: data.id,
      like: !like,
    }
    await commentServices.toggleLikeComment(payload);

    if (like === false) {
      setLikeNumber(likeNumber + 1)
    } else {
      setLikeNumber(likeNumber - 1)
    }
  };
  const handleOpenCommentAction = () => {
    setModal(!modal);
  }
  const handleDeleteComment = () => {
    setConfirm(!confirm);
    setConfirmType(false);
  }
  const handleReportComment = () => {
    setConfirm(!confirm);
    setConfirmType(true);
  }
  const handleConfirmDelete = async () => {
    await commentServices.deleteComment(data.id);
    setConfirm(!confirm);
    if (typeof deleteCommentCount === "function") {
      deleteCommentCount();
    }
  }
  console.log(index)
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("avatar")}>
          <Avatar size={32} src={data.author.avatar} />
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
                  <Link className={cx("name-in-content")} href={`/${data.author.id}`}>
                    {data.author.userName}
                  </Link>
                  {data.content}
                </p>
              </ShowMoreText>
            </div>

          </div>
          <div className={cx("infor")}>
            <div className={cx("day")}>
              <p>
                <Moment locale={language == 'en' ? 'en' : 'vi'} fromNow>
                  {data.createdAt}
                </Moment>
              </p>
            </div>
            <div className={cx("like_number")}>
              <p>
                <FormattedNumber
                  notation="compact"
                  maximumFractionDigits={2}
                  value={likeNumber}
                />
                <FormattedMessage id="Post.Likes" />
              </p>
            </div>
          </div>
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


          <div className={cx("more_button")} onClick={handleOpenCommentAction}>
            <ThreeDotsIcon width="16px" height="16px" />
            {
              modal &&
              <div className={cx("modal", index === 0 && "first")} onMouseLeave={handleOpenCommentAction}>
                <div className={cx("modal_main")}>

                  <div className={cx("modal_main-button")} onClick={handleReportComment}>
                    <FormattedMessage id="Common.Reply" />
                  </div>

                  {
                    data.userId !== idUser &&
                    <div className={cx("modal_main-button")} onClick={handleReportComment}>
                      <FormattedMessage id="Common.Report" />
                    </div>
                  }

                  {
                    data.userId === idUser &&
                    <div className={cx("modal_main-button")} onClick={handleDeleteComment}>
                      <FormattedMessage id="Common.Delete" />
                    </div>
                  }



                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {
        confirm &&
        <div className={cx("confirm")}>
          <div className={cx("confirm_main")}>
            <div className={cx("message")}>
              {
                confirmType ?
                  <FormattedMessage id="Comment.Report_comment_message" />

                  :
                  <FormattedMessage id="Comment.Delete_comment_message" />
              }
            </div>
            <div className={cx("confirm_action")}>
              <div className={cx("confirm_action-button")} onClick={handleConfirmDelete}>

                <FormattedMessage id="Common.Delete" />
              </div>
              <div className={cx("confirm_action-button")} onClick={handleDeleteComment}>

                <FormattedMessage id="Common.Cancel" />
              </div>
            </div>

          </div>
        </div>
      }
    </>

  );
};
export default CommentCard;

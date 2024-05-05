// "use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./FullPost.module.scss";
import {
  CommentIcon,
  HeartIcon,
  HeartIconFill,
  SaveIcon,
  ShareIcon,
  ThreeDotsIcon,
} from "~/assets/icon";

import { FC, useState, useRef, useEffect } from "react";
import ShowMoreText from "react-show-more-text";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Avatar from "../Avatar/Avatar";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import MentionCustom from "../Mentions/Mention";
import CommentCard from "../Comment/Comment";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import postServices from "~/services/postServices";
import commentServices from "~/services/commentServices";
// import vi from "moment/locale/vi"

const cx = classNames.bind(styles);
interface FullPostCompProps {
  data?: any;
  likeList: any;
  fatherCount?: any;
  fatherLike?: any;
  commentFatherNumber?: any;
}

const FullPostComp: FC<FullPostCompProps> = ({ data, commentFatherNumber, likeList, fatherCount, fatherLike }) => {
  const [play, setPlay] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(likeList.includes(data.id));
  const [likeNumber, setLikeNumber] = useState<number>(data.likeNumber);
  const [commentNumber, setCommentNumber] = useState<number>(commentFatherNumber);
  const [focus, setFocus] = useState<boolean>(false);
  const [comment, setComment] = useState<any>("");
  const [commentList, setCommentList] = useState<any>([]);
  const [commentLikeList, setCommentLikeList] = useState<any>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const language = useSelector<any>(state => state.app.language);
  const idUser = useSelector<any>(state => state.auth.data.id);

  const handlePlayVideo = () => {
    if (videoRef.current !== null) {
      if (play === false) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setPlay(!play);
    }
  };
  const handleLike = async () => {
    setLike(!like);
    const payload = {
      userId: idUser,
      postId: data.id,
      like: !like
    }
    const result = await postServices.handleToggleLikePost(payload);
    if (like === true) {
      setLikeNumber(likeNumber - 1);

    } else {
      setLikeNumber(likeNumber + 1);

    }
    if (fatherLike && typeof fatherLike === 'function') {
      if (like) {
        fatherLike(likeNumber - 1);
      } else {
        fatherLike(likeNumber + 1);
      }
    }
  };
  const deleteCommentCount = () => {
    setCommentNumber(commentNumber - 1);
    fatherCount(commentNumber - 1);
  }
  const handleSetPlay = () => {
    setPlay(false);
  };
  const handleFocusInput = () => {
    setFocus(!focus);
  };
  const handlePushComment = async () => {
    if (comment !== "") {
      const payload = {
        userId: idUser,
        postId: data.id,
        content: comment,
      }
      await commentServices.createComment(payload);
      setCommentNumber(commentNumber + 1);
      setComment("");
      if (fatherCount && typeof fatherCount === 'function') {
        fatherCount(commentNumber + 1);
      }
      fetchData();
    }
  }
  async function fetchData() {
    const result = await commentServices.getAllComment(data.id, idUser);
    setCommentList(result.result);
    setCommentLikeList(result.likeCommentList);
  }

  useEffect(() => {


    fetchData();


  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("body")} onClick={handlePlayVideo}>
        {
          data.typeFile === false ?
            <img src={data.img} /> :
            <video
              ref={videoRef}
              onEnded={handleSetPlay}
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              preload="metadata"
              muted
              controls
              controlsList="nofullscreen nodownload noremoteplayback noplaybackrate">
              <source src={data.img} />
            </video>
        }
      </div>
      <div className={cx("full_comment")}>
        <div className={cx("box")}>
          <div className={cx("header")}>
            <div className={cx("infor")}>
              <div className={cx("avatar")}>
                <Avatar src={data.author.avatar} size={42} />
              </div>
              <div className={cx("title")}>
                <div className={cx("name")}>
                  <p>{data.author.userName}</p>
                </div>
              </div>
            </div>
            <div className={cx("header_action")}>
              <ThreeDotsIcon />
            </div>
          </div>
        </div>
        <div className={cx("comments_box")}>
          {
            data.content != "" &&
            <div className={cx("content")}>
              <div className={cx("avatar")}>
                <Avatar size={32} />
              </div>
              <div className={cx("content_text")}>

                <ShowMoreText
                  lines={1}
                  className={cx("text_content_post")}
                  // width={436}
                  more={<FormattedMessage id="Common.ShowMore" />}
                  less={<FormattedMessage id="Common.ShowLess" />}
                  anchorClass={cx("more_less-button")}>
                  <p>
                    <Link className={cx("name-in-content")} href={`${data.author.id}`}>
                      {data.author.userName}
                    </Link>
                    {data.content}
                  </p>
                </ShowMoreText>
                <div className={cx("day")}>
                  <p>
                    <Moment locale={language == 'en' ? 'en' : 'vi'} fromNow>
                      {data.createdAt}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          }
          {
            commentList.map((commentItem: any, index: any) => (
              <CommentCard index={index} deleteCommentCount={deleteCommentCount} key={commentItem.id} likeCheck={commentLikeList.includes(commentItem.id)} data={commentItem} />

            ))
          }

        </div>
        <div className={cx("box")}>
          <div className={cx("footer")}>
            <div className={cx("action")}>
              <div className={cx("action_main")}>
                <TippyCustom
                  place="top"
                  content={
                    like ? (
                      <FormattedMessage id="Post.Unlike" />
                    ) : (
                      <FormattedMessage id="Post.Like" />
                    )
                  }
                >
                  <div
                    className={cx("action_item", like && "heartAnimation")}
                    onClick={handleLike}
                  >
                    {like ? (
                      <HeartIconFill width="26" height="26" />
                    ) : (
                      <HeartIcon width="26" height="26" />
                    )}
                  </div>
                </TippyCustom>
                <TippyCustom
                  place="top"
                  content={<FormattedMessage id="Post.Comments" />}
                >
                  <div className={cx("action_item")} onClick={handleFocusInput}>
                    <CommentIcon width="28" height="28" />
                  </div>
                </TippyCustom>
                <TippyCustom
                  place="top"
                  content={<FormattedMessage id="Post.Share" />}
                >
                  <div className={cx("action_item")}>
                    <ShareIcon width="26" height="26" />
                  </div>
                </TippyCustom>
              </div>
              <div className={cx("action_save")}>
                <TippyCustom
                  place="top"
                  content={<FormattedMessage id="Post.Save" />}
                >
                  <div className={cx("action_item")}>
                    <SaveIcon width="28" height="28" />
                  </div>
                </TippyCustom>
              </div>
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
              <p>
                <FormattedNumber
                  notation="compact"
                  maximumFractionDigits={2}
                  value={commentNumber}
                />
                <FormattedMessage id="Post.Comments" />
              </p>
            </div>
            <div className={cx("day")}>
              <p>
                <Moment locale={language == 'en' ? 'en' : 'vi'} fromNow>
                  {data.createdAt}
                </Moment>
              </p>
            </div>
          </div>
          <div className={cx("add_comment")}>
            <MentionCustom handlePushComment={handlePushComment} setContent={setComment} focus={focus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPostComp;

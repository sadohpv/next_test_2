// "use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./FullPost.module.scss";
import {
  CommentIcon,
  EarthIcon,
  HeartIcon,
  HeartIconFill,
  SaveIcon,
  ShareIcon,
  ThreeDotsIcon,
} from "~/assets/icon";

import { FC, useState, useEffect, useRef } from "react";
import ShowMoreText from "react-show-more-text";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Avatar from "../Avatar/Avatar";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import MentionCustom from "../Mentions/Mention";

const cx = classNames.bind(styles);
interface FullPostCompProps {}

const FullPostComp: FC<FullPostCompProps> = ({}) => {
  const [play, setPlay] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
  const handleLike = () => {
    setLike(!like);
  };

  const handleSetPlay = () => {
    setPlay(false);
  };
  const handleFocusInput = () => {
    setFocus(!focus);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("body")} onClick={handlePlayVideo}>
        <video
          ref={videoRef}
          onEnded={handleSetPlay}
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          muted
          controls
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
        >
          <source src="https://res.cloudinary.com/dxtuoottl/video/upload/v1711876624/Video/3333456313215914361_h8kjlz.mp4" />
        </video>
      </div>
      <div className={cx("full_comment")}>
        <div className={cx("box")}>
          <div className={cx("header")}>
            <div className={cx("infor")}>
              <div className={cx("avatar")}>
                <Avatar size={42} />
              </div>
              <div className={cx("title")}>
                <div className={cx("name")}>
                  <p>_shiroll</p>
                </div>
              </div>
            </div>
            <div className={cx("header_action")}>
              <ThreeDotsIcon />
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("content_text")}>
              <ShowMoreText
                lines={3}
                more={<FormattedMessage id="Common.ShowMore" />}
                less={<FormattedMessage id="Common.ShowLess" />}
                anchorClass={cx("more_less-button")}
              >
                <p>
                  I come from a long line of below-stairs maids and gardeners.
                  Good ol' peasant stock. My mother and her sister made a
                  quantum leap out of that life. Then I made another quantum
                  leap. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </ShowMoreText>
            </div>
          </div>
        </div>
        <div className={cx("comments_box")}></div>
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
                  content={<FormattedMessage id="Post.Comment" />}
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
                  value={1234}
                />
                <FormattedMessage id="Post.Likes" />
              </p>
            </div>
            <div className={cx("day")}>
              <p>2 days ago</p>
            </div>
          </div>
          <div className={cx("add_comment")}>
            <MentionCustom focus={focus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPostComp;

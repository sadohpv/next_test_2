// "use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./PostComp.module.scss";
import {
  CommentIcon,
  CreateIcon,
  EarthIcon,
  HeartIcon,
  SaveIcon,
  ShareIcon,
  ThreeDotsIcon,
} from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState, useEffect, useRef } from "react";
import ShowMoreText from "react-show-more-text";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Avatar from "../Avatar/Avatar";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import FullPostComp from "./FullPost";

const cx = classNames.bind(styles);
interface PostCompProps {}

const PostComp: FC<PostCompProps> = ({}) => {
  const [play, setPlay] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);
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
  const handleSetPlay = () => {
    setPlay(false);
  };
  const handleShowPostModal = () => {
    setModal(true);
    const body = window.document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <div className={cx("infor")}>
            <div className={cx("avatar")}>
              <Avatar size={42} />
            </div>
            <div className={cx("title")}>
              <div className={cx("name")}>
                <p>_shiroll</p>
              </div>
              <div className={cx("status")}>
                <span>2d</span>
                <span>&#x2022;</span>
                <span>
                  <EarthIcon width="14" height="14" />
                </span>
              </div>
            </div>
          </div>
          <div className={cx("header_action")}>
            <ThreeDotsIcon />
          </div>
        </div>

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
        <div className={cx("footer")}>
          <div className={cx("action")}>
            <div className={cx("action_main")}>
              <TippyCustom
                place="top"
                content={<FormattedMessage id="Post.Like" />}
              >
                <div className={cx("action_item")}>
                  <HeartIcon width="26" height="26" />
                </div>
              </TippyCustom>
              <TippyCustom
                place="top"
                content={<FormattedMessage id="Post.Comment" />}
              >
                <div
                  className={cx("action_item")}
                  onClick={handleShowPostModal}
                >
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
          <div className={cx("content")}>
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
            <div className={cx("content_text")}>
              <ShowMoreText
                lines={1}
                more={<FormattedMessage id="Common.ShowMore" />}
                less={<FormattedMessage id="Common.ShowLess" />}
                anchorClass={cx("more_less-button")}
              >
                <p>
                  <Link className={cx("name-in-content")} href="#">
                    _shiroll
                  </Link>
                  I come from a long line of below-stairs maids and gardeners.
                  Good ol' peasant stock. My mother and her sister made a
                  quantum leap out of that life. Then I made another quantum
                  leap. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </ShowMoreText>
              <div
                className={cx("show_all-comment")}
                onClick={handleShowPostModal}
              >
                <FormattedMessage id="Post.Show_all_comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className={cx("full_post_box")}>
          <FullPostComp />
        </div>
      )}
    </>
  );
};

export default PostComp;

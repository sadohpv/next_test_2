// "use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./PostComp.module.scss";
import {
    CloseIcon,
    CommentIcon,
    EarthIcon,
    HeartIcon,
    HeartIconFill,
    SaveIcon,
    ShareIcon,
    ThreeDotsIcon,
} from "~/assets/icon";
import { FC, useState, useRef } from "react";
import ShowMoreText from "react-show-more-text";
import { FormattedMessage, FormattedNumber } from "react-intl";
import Avatar from "../Avatar/Avatar";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import FullPostComp from "./FullPost";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { LANGUAGE } from "~/utility/constants/constants";
import postServices from "~/services/postServices";
const cx = classNames.bind(styles);
interface PostCompProps {
    data: any;
    likeList: number[];
}

const PostComp: FC<PostCompProps> = ({ data, likeList }) => {
    const [play, setPlay] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(likeList.includes(data.id));
    const [likeNumber, setLikeNumber] = useState<number>(data.likeNumber);
    const [commentNumber, setCommentNumber] = useState<number>(data.commentNumber);
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
    const handleSetPlay = () => {
        setPlay(false);
    };
    const handleShowPostModal = () => {
        setModal(true);
        const body = window.document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
    };
    const handleCloseModal = () => {
        setModal(false);
        const body = window.document.getElementsByTagName("body")[0];
        body.style.overflow = "auto";
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

    };
    const handleFatherLike = async () => {
        setLike(!like);
        if (like === true) {
            setLikeNumber(likeNumber - 1);
        } else {
            setLikeNumber(likeNumber + 1);
        }
    }
    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("header")}>
                    <div className={cx("infor")}>
                        <div className={cx("avatar")}>
                            <Avatar src={data.author.avatar} size={42} />
                        </div>
                        <div className={cx("title")}>
                            <div className={cx("name")}>
                                <p>{data.author.userName}</p>
                            </div>
                            <div className={cx("status")}>
                                <span>
                                    <Moment locale={language == LANGUAGE.EN ? LANGUAGE.EN : LANGUAGE.VI} fromNow>
                                        {data.createdAt}
                                    </Moment>
                                </span>
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
                    {/* <video
                        ref={videoRef}
                        onEnded={handleSetPlay}
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        preload="metadata"
                        muted
                        controls
                        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate">
                        <source src="https://res.cloudinary.com/dxtuoottl/video/upload/v1711876624/Video/3333456313215914361_h8kjlz.mp4" />
                    </video> */}
                    <img src={data.img} />
                </div>
                <div className={cx("footer")}>
                    <div className={cx("action")}>
                        <div className={cx("action_main")}>
                            <TippyCustom place="top" content={<FormattedMessage id="Post.Like" />}>
                                <div className={cx("action_item", like && "heartAnimation")} onClick={handleLike}>
                                    {like ? (
                                        <HeartIconFill width="26" height="26" />
                                    ) : (
                                        <HeartIcon width="26" height="26" />
                                    )}
                                </div>
                            </TippyCustom>
                            <TippyCustom place="top" content={<FormattedMessage id="Post.Comments" />}>
                                <div className={cx("action_item")} onClick={handleShowPostModal}>
                                    <CommentIcon width="28" height="28" />
                                </div>
                            </TippyCustom>
                            <TippyCustom place="top" content={<FormattedMessage id="Post.Share" />}>
                                <div className={cx("action_item")}>
                                    <ShareIcon width="26" height="26" />
                                </div>
                            </TippyCustom>
                        </div>
                        <div className={cx("action_save")}>
                            <TippyCustom place="top" content={<FormattedMessage id="Post.Save" />}>
                                <div className={cx("action_item")}>
                                    <SaveIcon width="28" height="28" />
                                </div>
                            </TippyCustom>
                        </div>
                    </div>
                    <div className={cx("content")}>
                        <div className={cx("like_number")}>
                            <p>
                                <FormattedNumber notation="compact" maximumFractionDigits={2} value={likeNumber} />
                                <FormattedMessage id="Post.Likes" />
                            </p>

                            <p>
                                <FormattedNumber notation="compact" maximumFractionDigits={2} value={commentNumber} />
                                <FormattedMessage id="Post.Comments" />
                            </p>
                        </div>
                        <div className={cx("content_text")}>
                            {
                                data.content != "" &&
                                <ShowMoreText
                                    lines={1}
                                    more={<FormattedMessage id="Common.ShowMore" />}
                                    less={<FormattedMessage id="Common.ShowLess" />}
                                    anchorClass={cx("more_less-button")}>
                                    <p>
                                        <Link className={cx("name-in-content")} href="#">
                                            {data.author.userName}
                                        </Link>
                                        {data.content}
                                    </p>
                                </ShowMoreText>
                            }
                            <div className={cx("show_all-comment")} onClick={handleShowPostModal}>
                                <FormattedMessage id="Post.Show_all_comment" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <div className={cx("full_post_box")}>
                    <FullPostComp fatherCount={setCommentNumber} fatherLike={handleFatherLike} likeList={likeList} data={data} />
                    <div className={cx("close")} onClick={handleCloseModal}>
                        <CloseIcon width="42px" height="42px" />
                    </div>
                </div>
            )}
        </>
    );
};

export default PostComp;

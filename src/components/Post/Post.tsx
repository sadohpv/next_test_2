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
    LockIcon,
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
import LikeModalList from "./LikeModalList";
import { RootState } from "~/redux/store";
import UserCardHover from "../UserCard/UserCardHover";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);
interface PostCompProps {
    data: any;
    likeList?: number[];
}

const PostComp: FC<PostCompProps> = ({ data, likeList }) => {
    console.log(data);
    const [play, setPlay] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [modal, setModal] = useState<boolean>(false);
    const [listLike, setListLike] = useState(likeList ? likeList : []);
    const [like, setLike] = useState<boolean>(likeList ? likeList.includes(data.id) : false);
    const [likeNumber, setLikeNumber] = useState<number>(data.likeNumber);
    const [commentNumber, setCommentNumber] = useState<number>(data.commentNumber);
    const [actionModal, setActionModal] = useState(false);
    const [likeModal, setLikeModal] = useState(false);
    const [published, setPublished] = useState(data.published);
    const language = useSelector<any>(state => state.app.language);
    const idUser = useSelector<RootState, any>(state => state.auth.data.id);

    const handleLikeModal = () => {
        setLikeModal(true);
    }
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
            setListLike(listLike.filter(item => item !== data.id));
            setLikeNumber(likeNumber - 1);
        } else {
            const listAdd = [...listLike, data.id];
            setListLike(listAdd);
            setLikeNumber(likeNumber + 1);
        }

    };
    const handleOpenPostModal = () => {
        setActionModal(!actionModal);
    }
    const handleClosePostModal = () => {
        setActionModal(false);

    }

    const handleCopy = () => {
        const linkCopy = process.env.domain + 'post/' + data.id;
        navigator.clipboard.writeText(linkCopy);
        handleClosePostModal();
    }
    const handleSetPublish = async () => {
        // console.log()

        const payload = {
            postId: data.id,
            published: !published,
        }
        const res = await postServices.changePublished(payload);
        if (res) {
            setPublished(!published);
            setActionModal(false);
            toast.success(!published ? <FormattedMessage id="Post.Private_post" /> : <FormattedMessage id="Post.Publish_post" />, {
                autoClose: 3000
            })
        } else {
            toast.error("Something wrong! Try later", {
                autoClose: 3000
            })
        }

    }
    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("header")}>
                    <div className={cx("infor")}>
                        <TippyCustom
                            content={<UserCardHover key={data.id} data={data.author} />}
                            haveClick
                            theme="element"
                            place="bottom-start" >

                            <div className={cx("avatar")}>
                                <Avatar link={data.author.slug} src={data.author.avatar} size={42} />
                            </div>
                        </TippyCustom>
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
                                    {
                                        published ?
                                            <LockIcon width="14" height="14" />
                                            :
                                            <EarthIcon width="14" height="14" />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={cx("header_action")} >
                        <div className={cx("three_dot_button")} onClick={handleOpenPostModal}>

                            <ThreeDotsIcon />
                        </div>
                        {
                            actionModal &&
                            <div className={cx("action_modal")} onMouseLeave={handleClosePostModal}>
                                <div className={cx("action_item")} onClick={handleCopy}>


                                    <FormattedMessage id="Post.Copy_link_post" />

                                </div>
                                <div className={cx("action_item")}>
                                    <FormattedMessage id="Common.Report" />
                                </div>
                                {
                                    idUser === data.author.id &&
                                    <>
                                        <div className={cx("action_item")}>
                                            <FormattedMessage id="Common.Delete" />
                                        </div>
                                        {
                                            published ?
                                                <div className={cx("action_item")} onClick={handleSetPublish}>
                                                    <FormattedMessage id="Post.Publish_post" />
                                                </div>
                                                :
                                                <div className={cx("action_item")} onClick={handleSetPublish}>
                                                    <FormattedMessage id="Post.Private_post" />
                                                </div>
                                        }
                                    </>

                                }
                            </div>
                        }
                    </div>
                </div>

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
                            <p className={cx("likeModal_title")} onClick={handleLikeModal}>
                                <FormattedNumber notation="compact" maximumFractionDigits={2} value={likeNumber} />
                                <FormattedMessage id="Post.Likes" />
                            </p>

                            <p className={cx("likeModal_title")} onClick={handleShowPostModal}>
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
                                    <p >
                                        <Link className={cx("name-in-content")} href={`/${data.author.slug}`}>
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
                    <FullPostComp like={like} setCommentFatherNumber={setCommentNumber} commentFatherNumber={commentNumber} handleLike={handleLike} likeFatherNumber={likeNumber} data={data} likeList={listLike} />
                    <div className={cx("close")} onClick={handleCloseModal}>
                        <CloseIcon width="42px" height="42px" />
                    </div>
                </div>
            )}
            {
                likeModal && (
                    <div className={cx("like_modal")}>
                        <LikeModalList setLikeModal={setLikeModal} idUser={idUser} data={data} />
                    </div>
                )
            }
        </>
    );
};

export default PostComp;

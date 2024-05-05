// "use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./UserPagePost.module.scss";
import {
    CommentIcon,
    CommentIconFill,
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
interface UserPagePostCompProps {
    data?: any;

    fatherCount?: any;
    fatherLike?: any;
    commentFatherNumber?: any;
}

const UserPagePostComp: FC<UserPagePostCompProps> = ({ data }) => {
    // console.log(data)

    const [hover, setHover] = useState<boolean | null>(null);
    const handleOnHoverPicPost = () => {
        // console.log("Here");
        setHover(true);
    }
    const handleUnHover = () => {
        setHover(false);

    }
    return (
        <div className={cx("wrapper")} onMouseOut={handleUnHover} onMouseOver={handleOnHoverPicPost}>
            <div className={cx("post_pic")} >
                {
                    data.typeFile === false ?
                        <img src={data.img} /> :
                        <video

                            playsInline
                            disablePictureInPicture
                            disableRemotePlayback
                            preload="metadata"
                            muted
                            controls={false}
                            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate">
                            <source src={data.img} />
                        </video>
                }
            </div>
            {
                hover &&
                <div className={cx("infor_hover", "move_in")}>
                    <div className={cx("infor")}>
                        <div className={cx("infor_item")}>
                            <HeartIconFill  fill="white" />
                            <span className={cx("text")}>

                                <FormattedNumber
                                    notation="compact"
                                    maximumFractionDigits={2}
                                    value={data.likeNumber}
                                />
                            </span>
                        </div>
                        <div className={cx("infor_item")}>
                            <CommentIconFill  width="20px" height="20px"/>
                            <span className={cx("text")}>
                                <FormattedNumber
                                    notation="compact"
                                    maximumFractionDigits={2}
                                    value={data.commentNumber}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default UserPagePostComp

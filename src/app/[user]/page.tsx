"use client"

import classNames from "classnames/bind";

import { useRouter } from "next/navigation";
import styles from "$app/user/UserPage.module.scss"
import { useEffect, useState } from "react";
import userServices from "~/services/userServices";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";
import Avatar from "~/components/Avatar/Avatar";
import { FormattedMessage } from "react-intl";
import { AddFriendIcon, ContentIcon, ImageIcon, ThreeDotsIcon, VideoIcon } from "~/assets/icon";
import postServices from "~/services/postServices";
import UserPagePostComp from "~/components/Post/UserPagePost";
const cx = classNames.bind(styles);
export default function UserPage({ params }: { params: { user: string } }) {


  const [dataUserPage, setDataUserPage] = useState<any>({});
  const [listPost, setListPost] = useState<any>([])
  const [listShow, setListShow] = useState<any>([])
  const [tab, setTab] = useState<number>(1);
  const idUser = useSelector<RootState, any>(state => state.auth.data.id);
  useEffect(() => {
    async function fetchData() {
      const result = await userServices.getDataForUserPage(params.user, idUser);
      console.log(result);
      setDataUserPage(result);
    }
    if (idUser) {

      fetchData();
    }
    async function getPost() {
      const postList = await postServices.handleGetGuestPost(params.user, idUser)


      console.log(postList);
      setListPost(postList);
      setListShow(postList);

    }
    if (idUser) {

      getPost();
    }
  }, [idUser])
  console.log(listShow);

  const handleChangeTab = (value: number) => {
    if (tab !== value) {
      setTab(value);
      switch (value) {
        case 2:
          // const filter = listPost.filter(item=>item.typeFile)
          setListShow(listPost.filter((item: any) => item.typeFile === true))
          break;
        case 3:
          setListShow(listPost.filter((item: any) => item.typeFile === false))

          break;
        default:
          setListShow(listPost);

      }
    }

  }
  return <div className={cx("wrapper")}>
    <div className={cx("header")}>
      <div className={cx("avatar")}>
        <Avatar size={150} src={dataUserPage.avatar} />
      </div>
      <div className={cx("infor")}>
        <div className={cx("infor_1")}>
          <div className={cx("name")}>
            {dataUserPage.slug}
          </div>
          <div className={cx("action")}>
            <div className={cx("follow_button")}>
              <FormattedMessage id="Common.Follow" />
            </div>
            <div className={cx("suggest_button")}>
              <AddFriendIcon />
            </div>
            <div className={cx("more_button")}>
              <ThreeDotsIcon />
            </div>
          </div>
        </div>
        <div className={cx("infor_2")}>
          <div className={cx("middle_item")}>
            <div className={cx("number")}>
              <span>{dataUserPage.countPost}</span>
            </div>
            <div className={cx("text")}>
              <span>
                <FormattedMessage id="Common.posts" />
              </span>
            </div>
          </div>
          <div className={cx("middle_item")}>
            <div className={cx("number")}>
              <span>{dataUserPage.countFollower}</span>
            </div>
            <div className={cx("text")}>
              <span>
                <FormattedMessage id="Common.followers" />
              </span>
            </div>
          </div>
          <div className={cx("middle_item")}>
            <div className={cx("number")}>
              <span>{dataUserPage.countFollowing}</span>
            </div>
            <div className={cx("text")}>
              <span>
                <FormattedMessage id="Common.following" />
              </span>
            </div>
          </div>
        </div>
        <div className={cx("infor_3")}>
          <div className={cx("name")}>
            {dataUserPage.userName}
          </div>
        </div>
      </div>
    </div>
    <div className={cx("body")}>
      <div className={cx("title")}>
        <div className={cx("tile_item", tab === 1 && "title_active")} onClick={() => handleChangeTab(1)}>
          <ContentIcon />
          <FormattedMessage id="Common.Posts" />
        </div>
        <div className={cx("tile_item", tab === 2 && "title_active")} onClick={() => handleChangeTab(2)}>
          <VideoIcon />
          <FormattedMessage id="Common.Videos" />
        </div>
        <div className={cx("tile_item", tab === 3 && "title_active")} onClick={() => handleChangeTab(3)}>
          <ImageIcon />
          <FormattedMessage id="Common.Photos" />
        </div>
      </div>
      <div className={cx("body_main")}>


        {
          listShow.map((item: any) => {

            return <UserPagePostComp data={item} />
          }
          )
        }

      </div>
    </div>

    <div className={cx("footer")}>

    </div>
  </div>;
}

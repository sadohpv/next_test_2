"use client";
import classNames from "classnames/bind";
import styles from "$app/App.module.scss";
import { useWindowSize } from "usehooks-ts";
import Avatar from "~/components/Avatar/Avatar";
import { useEffect, useState } from "react";
import { CopyRightIcon } from "~/assets/icon";
import Submain from "~/components/App/Submain";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import NavbarSearch from "~/components/Navbar/NavbarSearch";
import Navbar from "~/components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import PostComp from "~/components/Post/Post";
import postServices from "~/services/postServices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);

export default function Home() {
  // const submain = useMediaQuery("(min-width: 1160px)");
  // console.log(submain);
  const [postList, setPostList] = useState<any>([]);
  const [submain, setSubmain] = useState<boolean>(true);
  const { width = 0, height = 0 } = useWindowSize();
  const [likePostList, setLikePostList] = useState<any>([]);
  const idUser = useSelector<any>(state => state.auth.data.id);

  useEffect(() => {
    if (width >= 1160) {
      setSubmain(true);
    } else {
      setSubmain(false);
    }
  }, [width]);
  useEffect(() => {
    if (width >= 1160) {
      setSubmain(true);
    } else {
      setSubmain(false);
    }

  }, []);
  //  console.log(width);
  // const theme = useSelector((state:any) =>state.app.theme);
  useEffect(() => {

    async function fetchData() {
      const result = await postServices.getAllPost(idUser);
      setPostList(result.dataPost);
      setLikePostList(result.checkLike);
    }
    if (idUser) {
      
      fetchData();
    }
  }, [idUser])
  return (
    <>
      
      <div className={cx("wrapper")}>
        <div className={cx("main")}>
          {
            postList.map((postData: any) =>
              <PostComp key={postData.id} likeList={likePostList} data={postData} />
            )
          }

        </div>
        {submain && <Submain />}
      </div>
      <ToastContainer />

    </>
  );
}

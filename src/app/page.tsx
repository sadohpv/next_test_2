"use client";
import classNames from "classnames/bind";
import styles from "$app/App.module.scss";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useState } from "react";
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
import InfiniteScroll from "react-infinite-scroll-component";
import IsLoading from "~/components/Skeleton/IsLoading";
import { IRootState } from "~/redux/reducers/rootReducer";

const cx = classNames.bind(styles);

export default function Home() {
  // const submain = useMediaQuery("(min-width: 1160px)");
  // console.log(submain);
  const [postList, setPostList] = useState<any>([]);
  const [submain, setSubmain] = useState<boolean>(true);
  const { width = 0, height = 0 } = useWindowSize();
  const [likePostList, setLikePostList] = useState<any>([]);
  const idUser = useSelector<IRootState, any>(state => state.auth.data.id);
  const [postPage, setPostPage] = useState(0);
  const [hasMorePost, setHasMorePost] = useState(true);

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
  const fetchDataHomePage = async () => {

    const response = await postServices.getPostPage(postPage + 1, idUser);
    setPostPage(postPage + 1);
    if (response.dataPost.length > 0) {
      setPostList([...postList, ...response.dataPost]);
    } else {
      setHasMorePost(false);
    }



  };
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

          <InfiniteScroll
            dataLength={postList.length}
            next={fetchDataHomePage}
            hasMore={true}
            // inverse={true}

            style={{
              width: "100%",
              overflowX: "hidden",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",

            }}
            // scrollableTarget="home_main"
            scrollThreshold="10px"
            scrollableTarget="main"
            loader={
              <IsLoading />

            }
          >
            {
              postList.map((postData: any) =>
                <PostComp key={postData.id} likeList={likePostList} data={postData} />
              )
            }
          </InfiniteScroll>
        </div>
        {submain && <Submain />}
      </div>
      <ToastContainer />

    </>
  );
}

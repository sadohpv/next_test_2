import { Mention, MentionsInput } from "react-mentions";
import "./MentionStyle.css";
import { useRef, useState, FC, useEffect } from "react";
import Avatar from "../Avatar/Avatar";
import friendServices from "~/services/friendServices";
import { useSelector } from "react-redux";
import { IRootState } from "~/redux/reducers/rootReducer";
interface MentionCustomProps {
  focus?: boolean;
  currentHeight?: string;
  maxHeight?: string | number;
  setContent: any;
  handlePushComment?: any;
  content?: any;

}

const MentionCustom: FC<MentionCustomProps> = ({ handlePushComment, content = '', setContent, focus, currentHeight = "16px", maxHeight = 168 }) => {
  const renderSuggestContainer = (children: any) => {
    return <div className="item">{children}</div>;
  };
  const renderSuggestion = (
    entry: any,
    search: any,
    highlightedDisplay: any,
    index: any,
    focused: any
  ) => {
    return (
      <div className="suggest">
        <div className={`box ${focused && "focused"}`}>
          <div className="tag_avt">
            <Avatar src={entry.img} size={36} />
          </div>
          <div className="tag_infor">
            <span>{entry.display}</span>
            <span>{entry.fullName}</span>
          </div>
        </div>
      </div>
    );
  };
  const ref = useRef<any>();
  const [userComment, setUserComment] = useState(content);
  const [commentLast, setCommentLast] = useState("");
  const [userList, setUserList] = useState<any[]>([]);
  const idUser = useSelector<IRootState, any>(state => state.auth.data.id);

  const handleContentPost = (e: { target: any; shiftKey?: any }) => {
    ref.current.style.height = currentHeight;

    const height = ref.current.scrollHeight;
    if (height > 0 && height <= maxHeight) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    } else {
      ref.current.style.height = maxHeight + "px";

    }
    const content = e.target.value;
    if (e.shiftKey === true) {
    }
    if (!content.startsWith(" ")) {
      setUserComment(content);
      setContent(content);
    }
  };

  const handleContentKeyDown = async (e: any) => {

    if (userComment !== "") {
      if (e.keyCode === 13 && e.shiftKey === false) {
        if (typeof handlePushComment === 'function') {

          handlePushComment();
          setContent("");
          setUserComment("");
          setCommentLast("");

        }
        e.preventDefault();

      } else if (e.keyCode === 13 && e.shiftKey === true) {
        let breakLine = commentLast.concat("\\b");


        setCommentLast(breakLine);
        setContent(breakLine);

      } else {
        setCommentLast(e.target.value);
        setContent(e.target.value);

      }
    } else {
      if (e.keyCode === 13) {
        e.preventDefault();
      }

    }
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.selectionEnd = ref.current.selectionStart = content.length;
      ref.current.focus();
    }
  }, [focus]);

  useEffect(() => {
    async function getMentionComment() {
      const result = await friendServices.handleGetFriendForMention(idUser);
      console.log(result);
      if (result.result) {

        let tempArray: any[] = [];
        result.result.map((item: any, index: any) => {
          tempArray.push({
            id: item.slug,
            display: item.userName,
            fullName: `${item.userName} - ${item.address}`,
            email: item.email,
            img: item.avatar,
          });
        });
        setUserList(tempArray);
      }
    }
    getMentionComment();
  }, [])
  return (
    <>
      <MentionsInput
        value={userComment}
        className="mention"
        onChange={(e) => handleContentPost(e)}
        onKeyDown={(e) => handleContentKeyDown(e)}
        inputRef={ref}
        customSuggestionsContainer={renderSuggestContainer}
        placeholder="Comment in this post !"
        allowSpaceInQuery={true}
        allowSuggestionsAboveCursor={true}
      >
        <Mention
          trigger={"@"}
          className="recommend"
          data={userList}

          renderSuggestion={renderSuggestion}
          markup={"@t@g@__id__@t@g$*__display__@t@g"}
        />
      </MentionsInput>
    </>
  );
};

export default MentionCustom;

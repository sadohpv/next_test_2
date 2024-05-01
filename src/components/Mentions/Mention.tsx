import { Mention, MentionsInput } from "react-mentions";
import "./MentionStyle.css";
import { useRef, useState, FC, useEffect } from "react";
import Avatar from "../Avatar/Avatar";
interface MentionCustomProps {
  focus?: boolean;
  currentHeight?: string;
  maxHeight?: string | number;
  setContent: any;
  handlePushComment?: any;
}

const MentionCustom: FC<MentionCustomProps> = ({ handlePushComment, setContent, focus, currentHeight = "16px", maxHeight = 168 }) => {
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
  const users = [
    {
      id: 1,
      fullName: "John",
      display: "Jay Back",
    },
    {
      id: 2,
      fullName: "John",
      display: "John Wick",
    },
    {
      id: 3,
      fullName: "John",
      display: "Jay Back",
    },
    {
      id: 4,
      fullName: "John",
      display: "John Wick",
    },
    {
      id: 5,
      fullName: "John",
      display: "John Wick",
    },
    {
      id: 6,
      fullName: "John",
      display: "John Wick",
    },
  ];
  const ref = useRef<any>();
  const [userComment, setUserComment] = useState("");
  const [commentLast, setCommentLast] = useState("");
  // const [currentHeight, setCurrentHeight] = useState(height ? height : "16px");
  // const [maxHeight]
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
      ref.current.focus();
    }
  }, [focus]);
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
          data={users}
          renderSuggestion={renderSuggestion}
          markup={"@t@g@__id__@t@g$*__display__@t@g"}
        />
      </MentionsInput>
    </>
  );
};

export default MentionCustom;

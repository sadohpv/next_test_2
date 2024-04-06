import { Mention, MentionsInput } from "react-mentions";
import "./MentionStyle.css";
import classNames from "classnames/bind";
import { useRef, useState, FC, useEffect } from "react";
import Avatar from "../Avatar/Avatar";
interface MentionCustomProps {
  focus?: boolean;
}

const MentionCustom: FC<MentionCustomProps> = ({ focus }) => {
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
            <Avatar src={entry.img} size={32} />
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
  ];
  const ref = useRef<any>();
  const [userComment, setUserComment] = useState("");
  const [commentLast, setCommentLast] = useState("");

  const handleContentPost = (e: { target: any; shiftKey?: any }) => {
    ref.current.style.height = "16px";

    const height = ref.current.scrollHeight;
    if (height > 0 && height <= 168) {
      ref.current.style.height = ref.current.scrollHeight + "px";
      console.log(ref.current.style.height);
    } else {
      // console.log("Here");
      ref.current.style.height = 168 + "px";
      console.log(ref.current.style.height);
    }
    const content = e.target.value;
    if (e.shiftKey === true) {
    }
    if (!content.startsWith(" ")) {
      setUserComment(content);
    }
  };

  const handleContentKeyDown = async (e: any) => {
    if (userComment !== "") {
      if (e.keyCode === 13 && e.shiftKey === false) {
        console.log("OK");
      } else if (e.keyCode === 13 && e.shiftKey === true) {
        let breakLine = commentLast.concat("\\b");

        // console.log(breakLine);
        setCommentLast(breakLine);
        // setUserComment(breakLine);
      } else {
        setCommentLast(e.target.value);
      }
    } else {
      if (e.keyCode === 13 && e.shiftKey === false) {
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

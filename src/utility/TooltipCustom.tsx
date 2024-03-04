import Tippy, { TippyProps } from "@tippyjs/react";
import React, { ReactNode, ReactElement } from "react";
import "tippy.js/animations/scale.css";

import "tippy.js/dist/tippy.css";
interface TippyCustomProps {
  children: ReactElement;
  content: string | ReactElement;
  place?: "top" | "bottom" | "left" | "right" | "auto";
  haveClick?: boolean;
}

const TippyCustom: React.FC<TippyCustomProps> = ({
  children,
  content,
  place = "auto",
  haveClick = false,
}) => {
  return (
    <Tippy
      content={content}
      arrow={false}
      placement={place}
      animation={"scale"}
      trigger={haveClick === true ? "click" : "mouseenter"}
      zIndex={9999}
      interactive={haveClick}
      // popperOptions={['bottom', 'right']}
    >
      {children}
    </Tippy>
  );
};
export default TippyCustom;

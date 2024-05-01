import React, { FC } from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Avatar.module.scss";
import { AvatarDefault } from "~/assets/icon";

const cx = classNames.bind(styles);

interface AvatarProps {
  src?: string;
  link?: string;
  size: number;
}

const Avatar: FC<AvatarProps> = ({ src, link = "#", size = 36 }) => {
  return (
    <Link
      href={`/${link}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      className={cx("wrapper")}
    >
      {src && src != "" ? (
        <img src={src} alt="Avatar" />
      ) : (
        <AvatarDefault width={`${size}`} height={`${size}`} />
      )}
    </Link>
  );
};

export default Avatar;

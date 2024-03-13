"use client";
import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "$app/auth/Login.module.scss";
import FallingStars from "~/components/Funny/FallingStars";
import { FormattedMessage } from "react-intl";
import Link from "next/link";

const cx = classNames.bind(styles);

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const [loginType, SetLoginType] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    alert(account);
  };
  const handleSwitchAccountLogin = () => {
    SetLoginType(!loginType);
  };

  const handleChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
      setAccount(e.target.value.trim());
    }
  };
  const handleChangeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
      setPassword(e.target.value.trim());
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("falling_star")}>
        <FallingStars />
      </div>
      <div className={cx("title")}>
        <span>
          <FormattedMessage id="Login.Login" />
        </span>
      </div>
      <div className={cx("main")}>
        <div className={cx("input_box")}>
          <div className={cx("input_title")}>
            <div
              className={cx("switch_login", loginType && "login_active")}
              onClick={handleSwitchAccountLogin}
            >
              <span>
                <FormattedMessage id="Login.Email" />
              </span>
            </div>
            <div
              className={cx("switch_login", !loginType && "login_active")}
              onClick={handleSwitchAccountLogin}
            >
              <span>
                <FormattedMessage id="Login.Phonenumber" />
              </span>
            </div>
          </div>
          <input
            value={account}
            type="text"
            placeholder="Email"
            onChange={(e) => handleChangeAccount(e)}
            onKeyDown={(e) => handleChangeKeyDown(e)}
          />
        </div>
        <div className={cx("input_box")}>
          <div className={cx("input_title")}>
            <FormattedMessage id="Login.Password" />
          </div>
          <input
            value={password}
            type="password"
            onChange={(e) => handleChangePassword(e)}
            placeholder="Password"
            onKeyDown={(e) => handleChangeKeyDown(e)}
          />
        </div>
        <div className={cx("action")}>
          <div className={cx("login_button")} onClick={handleLogin}>
            <span>
              <FormattedMessage id="Login.Login" />
            </span>
          </div>
          <div className={cx("link_sign")}>
            <span>If you don't have account please click | </span>
            <Link href="/register"> Register </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

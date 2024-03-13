"use client";
import React, { FC, useState } from "react";
import classNames from "classnames/bind";
import styles from "$app/auth/Register.module.scss";
import FallingStars from "~/components/Funny/FallingStars";
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import authService from "~/services/authServices"
const cx = classNames.bind(styles);

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = () => {
  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [gender, setGender] = useState<boolean>(false);
  const handleRegister = async () => {
    const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    const emailRegex = /^[a-zA-Z0-9._]+(@gmail.com)$/;
    const res = await authService.handleRegister();
    console.log(res);
  };

  const handleChangeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
      setAccount(e.target.value.trim());
    }
  };

  const handleChangeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleRegister();
    }
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
      setPassword(e.target.value.trim());
    }
  };
  const handleChangePhonenumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    var regex = /^[0-9]+$/;

    if (e.target.value.match(regex) || e.target.value == "") {
      setPhone(e.target.value.trim());
    }
  };
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
        setUsername(e.target.value);
    }
  };
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(" ") === false) {
        setAddress(e.target.value);
    }
  };
  const handleChangeGender = (value: boolean) => {
    setGender(value);
    
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("falling_star")}>
          <FallingStars />
        </div>
        <div className={cx("title")}>
          <span>
            <FormattedMessage id="Login.Register" />
          </span>
        </div>
        <div className={cx("main")}>
          <div className={cx("input_wrapper")}>
            <div className={cx("input_box")}>
              <div className={cx("input_title")}>
                <div className={cx("switch_login")}>
                  <span>
                    <FormattedMessage id="Login.Email" />
                  </span>
                </div>
              </div>
              <input
                value={account}
                type="email"
                required
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
                required
                type="password"
                minLength={6}
                maxLength={18}
                onChange={(e) => handleChangePassword(e)}
                placeholder="Password"
                onKeyDown={(e) => handleChangeKeyDown(e)}
              />
            </div>
            <div className={cx("input_box")}>
              <div className={cx("input_title")}>
                <FormattedMessage id="Login.Phonenumber" />
              </div>
              <input
                value={phone}
                inputMode="numeric"
                maxLength={10}
                required
                type="tel"
                onChange={(e) => handleChangePhonenumber(e)}
                placeholder="Phone number"
                onKeyDown={(e) => handleChangeKeyDown(e)}
              />
            </div>
            <div className={cx("input_box")}>
              <div className={cx("input_title")}>
                <FormattedMessage id="Login.Username" />
              </div>
              <input
                value={username}
                required
                type="text"
                onChange={(e) => handleChangeUsername(e)}
                placeholder="User name"
                onKeyDown={(e) => handleChangeKeyDown(e)}
              />
            </div>
            <div className={cx("input_box")}>
              <div className={cx("input_title")}>
                <FormattedMessage id="Login.Address" />
              </div>
              <input
                value={address}
                required
                type="text"
                onChange={(e) => handleChangeAddress(e)}
                placeholder="Address"
                onKeyDown={(e) => handleChangeKeyDown(e)}
              />
            </div>
            <div className={cx("input_box")}>
              <div className={cx("input_title")}>
                <FormattedMessage id="Login.Gender" />
                <div className={cx("input_gender")}>
                  <div className={cx("gender", !gender && "active_gender")}>
                    <span onClick={() => handleChangeGender(true)}>Male</span>
                  </div>
                  <div className={cx("gender", gender && "active_gender")}>
                    <span onClick={() => handleChangeGender(false)}>
                      Female
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("action")}>
            <div className={cx("login_button")} onClick={handleRegister}>
              <span>
                <FormattedMessage id="Login.Register" />
              </span>
            </div>
            <div className={cx("link_sign")}>
              <span>If you have account please click | </span>
              <Link href="/login"> Login </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

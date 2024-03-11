import React, { FC } from "react";
import classNames from "classnames/bind";
import styles from "$comp/Avatar/Avatar.module.scss";


const cx = classNames.bind(styles);

interface LoginPageProps {
  
}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div>
        This Is Login Page
    </div>
  );
};

export default LoginPage;

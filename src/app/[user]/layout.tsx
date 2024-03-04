import classNames from "classnames/bind";
// import styles from "~/styles/app/user/Layout.module.scss";
import styles from "$app/user/Layout.module.scss"
const cx = classNames.bind(styles);

function LayoutUserPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>{children}</div>
    </div>
  );
}

export default LayoutUserPage;

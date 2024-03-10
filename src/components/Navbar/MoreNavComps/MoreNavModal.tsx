import Link from "next/link";
import classNames from "classnames/bind";
import styles from "$comp/Navbar/MoreNavComp.module.scss";

import { FC, useState } from "react";
import TooltipCustom from "~/utility/Tippy/TooltipCustom";
import { FormattedMessage } from "react-intl";
import { LanguageIcon, MoonIcon, WriteIcon } from "~/assets/icon";
import TippyCustom from "~/utility/Tippy/TooltipCustom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLanguageRedux,
  changeThemeRedux,
} from "~/redux/actions/appAction";
import { LANGUAGE, THEME } from "~/utility/constants/constants";
const cx = classNames.bind(styles);
interface MoreNavModalProps {}

const MoreNavModal: FC<MoreNavModalProps> = ({}) => {
  const language = useSelector((state: any) => state.app.language);
  const theme = useSelector((state: any) => state.app.theme);

  const dispatch = useDispatch<any>();
  const handleToggleLanguage = () => {
    if (language === LANGUAGE.VI) {
      dispatch(changeLanguageRedux(LANGUAGE.EN));
    }
    if (language === LANGUAGE.EN) {
      dispatch(changeLanguageRedux(LANGUAGE.VI));
    }
  };
  const handleToggleTheme = () => {
    if (theme === THEME.DARK) {
      dispatch(changeThemeRedux(THEME.LIGHT));
    }
    if (theme === THEME.LIGHT) {
      dispatch(changeThemeRedux(THEME.DARK));
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("more_item")}>
        <div className={cx("more_icon")}>
          <WriteIcon />
        </div>
        <div className={cx("more_title")}>
          <FormattedMessage id="Navbar.setting" />
        </div>
      </div>
      <TippyCustom content={<FormattedMessage id="Navbar.language" />}>
        <div className={cx("more_item")} onClick={handleToggleLanguage}>
          <div className={cx("more_icon")}>
            <LanguageIcon />
          </div>
          <div className={cx("more_title", "language_button")}>
            <div
              className={cx(
                "language",
                language === LANGUAGE.EN && "lang_active"
              )}
            >
              <span>English</span>
            </div>
            <div
              className={cx(
                "language",
                language === LANGUAGE.VI && "lang_active"
              )}
            >
              <span>Tiếng Việt</span>
            </div>
          </div>
        </div>
      </TippyCustom>
      <TippyCustom content={<FormattedMessage id="Navbar.Theme" />}>
        <div className={cx("more_item")} onClick={handleToggleTheme}>
          <div className={cx("more_icon")}>
            {theme === THEME.DARK && <MoonIcon />}
            {theme === THEME.LIGHT && <MoonIcon />}
          </div>
          <div className={cx("more_title", "language_button")}>
            <div
              className={cx("language", theme === THEME.DARK && "lang_active")}
            >
              <span>
                <FormattedMessage id="Navbar.Dark" />
              </span>
            </div>
            <div
              className={cx("language", theme === THEME.LIGHT && "lang_active")}
            >
              <span>
                <FormattedMessage id="Navbar.Light" />
              </span>
            </div>
          </div>
        </div>
      </TippyCustom>
    </div>
  );
};

export default MoreNavModal;

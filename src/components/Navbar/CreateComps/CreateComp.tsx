"use client";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./CreateComp.module.scss";
import { BackIcon, CameraIcon, CreateIcon } from "~/assets/icon";
import { usePathname } from "next/navigation";
import { FC, useState, useEffect, useRef } from "react";
import TippyCustom from "~/utility/Tippy/TooltipCustom";

import { FormattedMessage } from "react-intl";
import { STEP } from "~/utility/constants/constants";
import CropImage from "./CropImage";
import getCroppedImg from './cropImg'
import Avatar from "~/components/Avatar/Avatar";
import MentionCustom from "~/components/Mentions/Mention";
const cx = classNames.bind(styles);
interface CreateCompProps {
    setModal: (modal: boolean) => void;
    modal: boolean;
    tippy: boolean | null;

    page: number;
    setPage: (page: number) => void;
}

const CreateComp: FC<CreateCompProps> = ({ setModal, modal, page, setPage, tippy }) => {
    // console.log(router);
    // const [create, setCreate] = useState<boolean>(false);
    const router = usePathname();
    const [step, setStep] = useState<STEP>(STEP.STEP_ONE);
    const [imgPreview, setimgPreview] = useState<string>("");
    const [file, setFile] = useState<any>("");
    const [imageAfterCrop, setImgAfterCrop] = useState("");
    const imgRef = useRef<any>();
    const [cropArea, setCropArea] = useState<any>(null);
    const [aspectRadio, setAspectRadio] = useState<any>(1 / 1);

    const handleToggle = () => {
        if (page === 3) {
            setPage(0);
            setModal(false);
        } else {
            setPage(3);
            setModal(true);
        }
    };
    const handleNextStep = async () => {
        switch (step) {

            case STEP.STEP_TWO:
                await handleCropImage();
                setStep(STEP.STEP_THREE)
                break;

            case STEP.STEP_THREE:
                // setStep(STEP.STEP_THREE)
                console.log("CALL CREATE POST");

                break;
            default:
                setStep(STEP.STEP_ONE);

        }
    }
    const handleBackStep = () => {
        switch (step) {
            case STEP.STEP_ONE:
                handleToggle();

            case STEP.STEP_TWO:
                setStep(STEP.STEP_ONE);
                setimgPreview("");
                setFile("");

                break;
            case STEP.STEP_THREE:
                setStep(STEP.STEP_TWO);
                break;
            default:
                setStep(STEP.STEP_ONE);

        }
    }
    const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            setimgPreview(URL.createObjectURL(e.target.files[0]));
            setFile(e.target.files[0]);
            setStep(STEP.STEP_TWO)

            // reader.onload = () => {
            //     setFile(reader.result);
            // };
        }

    }

    const handleCropImage = async () => {
        try {
            if (aspectRadio) {
                const result = await getCroppedImg(imgPreview, cropArea,);
                setImgAfterCrop(result.url);
                setFile(result.file);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {tippy !== null ? (
                <TippyCustom content={<FormattedMessage id="Navbar.create" />} place={tippy === true ? "top" : "right"}>
                    <div className={cx("nav_item", modal && "active", page === 3 && "border")} onClick={handleToggle}>
                        <div className={cx("icon")}>
                            <CreateIcon
                                fill={page === 3 ? "var(--text-color)" : "none"}
                                strokeWidth={page === 3 ? "2.5" : "1.5"}
                            />
                        </div>
                        <span>
                            <FormattedMessage id="Navbar.create" />
                        </span>
                    </div>
                </TippyCustom>
            ) : (
                <div className={cx("nav_item", modal && "active", page === 3 && "border")} onClick={handleToggle}>
                    <div className={cx("icon")}>
                        <CreateIcon
                            fill={page === 3 ? "var(--text-color)" : "none"}
                            strokeWidth={page === 3 ? "2.5" : "1.5"}
                        />
                    </div>
                    <span>
                        <FormattedMessage id="Navbar.create" />
                    </span>
                </div>
            )}
            {page === 3 && (
                <div className={cx("modal_create")}>
                    <div className={cx("main")}>
                        <div className={cx("header")}>
                            <div className={cx("back")} onClick={handleBackStep}>
                                <p>
                                    <BackIcon />
                                </p>
                            </div>
                            <div className={cx("title")}>
                                {
                                    step == STEP.STEP_ONE ? <FormattedMessage id="Post.Upload_image" /> :
                                        step == STEP.STEP_TWO ? <FormattedMessage id="Post.Crop" />
                                            :
                                            step == STEP.STEP_THREE && <FormattedMessage id="Post.New_post" />

                                }

                            </div>
                            <div className={cx("next")} onClick={handleNextStep}>
                                {
                                    step === STEP.STEP_TWO &&
                                    <FormattedMessage id="Post.Next" />
                                }
                                {
                                    step === STEP.STEP_THREE &&
                                    <FormattedMessage id="Post.Share" />
                                }
                            </div>
                        </div>
                        <div className={cx("body")}>
                            {
                                step == STEP.STEP_ONE && <div className={cx(`step_${STEP.STEP_ONE}`)}>
                                    <div className={cx("tilte_1")}>
                                        <CameraIcon width="100px" height="100px" />
                                        <p>
                                            Drag photo and video here
                                        </p>
                                    </div>
                                    <div className={cx("input")}>
                                        <span>
                                            Select from compiter
                                        </span>
                                        <input title=" "


                                            onChange={(event) => handleSelectFile(event)} type="file" accept="video/*, image/*" />
                                    </div>
                                    {
                                        imgPreview && <img ref={imgRef} id={cx("preview")} src={imgPreview} />
                                    }
                                </div>

                            }
                            {
                                step === STEP.STEP_TWO &&
                                <div className={cx(`step_${STEP.STEP_TWO}`)}>
                                    <CropImage aspectRadio={aspectRadio} setAspectRadio={setAspectRadio} image={imgPreview} setCropArea={setCropArea} />
                                </div>
                            }
                            {
                                step === STEP.STEP_THREE &&
                                <div className={cx(`step_${STEP.STEP_THREE}`)}>
                                    <div className={cx("pic")}>
                                        <img className={cx("last_image")} src={imageAfterCrop} />
                                    </div>
                                    <div className={cx("content_post")}>
                                        <div className={cx("content_header")}>
                                            <Avatar size={28} />
                                            <div className={cx("name")}>
                                                <p>
                                                    _shiroll
                                                </p>
                                            </div>
                                        </div>
                                        <div className={cx("content_input")}>
                                            
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default CreateComp;

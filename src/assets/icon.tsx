export const HomeIcon = ({ width = "24px", height = "24px", fill = "none" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" id="home">
            <path
                fill={fill}
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
                transform="translate(2.5 2)"></path>
        </svg>
    );
};
export const SearchIcon = ({ width = "24px", height = "24px", fill = "none", strokeWidth = "0" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="10 10 82 82"
            id="search"
            fill="var(--text-color)"
            strokeWidth={strokeWidth}
            stroke="var(--text-color)">
            <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
        </svg>
    );
};
export const HeartIcon = ({ width = "24px", height = "24px", fill = "none" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="heart" viewBox="0 0 16 16 ">
            <path
                fill={fill}
                stroke="var(--text-color)"
                d="M5.047 2.506c-2.114 0-3.533 1.711-3.533 3.824 0 2.398 3.35 5.263 6.22 7.176 2.871-1.913 6.182-4.824 6.221-7.176.035-2.113-1.333-3.824-3.447-3.824-.902 0-1.817.477-2.774 1.433-.957-.956-1.785-1.433-2.687-1.433z"></path>
        </svg>
    );
};
export const HeartIconFill = ({ width = "24px", height = "24px", fill = "none" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="heart" viewBox="0 0 16 16 ">
            <path
                fill={"red"}
                stroke="red"
                d="M5.047 2.506c-2.114 0-3.533 1.711-3.533 3.824 0 2.398 3.35 5.263 6.22 7.176 2.871-1.913 6.182-4.824 6.221-7.176.035-2.113-1.333-3.824-3.447-3.824-.902 0-1.817.477-2.774 1.433-.957-.956-1.785-1.433-2.687-1.433z"></path>
        </svg>
    );
};
export const CreateIcon = ({ width = "24px", height = "24px", fill = "none", strokeWidth = "1.5" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="plus">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                transform="translate(3 3)">
                <rect width="18" height="18" rx="2"></rect>
                <path d="M9 5v8M5 9h8"></path>
            </g>
        </svg>
    );
};
export const AvatarDefault = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            fill="#000000"
            width={`calc(${width} / 2)`}
            height={`calc(${height} / 2)`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve">
            <g>
                <g>
                    <circle cx="256" cy="114.526" r="114.526" />
                </g>
            </g>
            <g>
                <g>
                    <path
                        d="M256,256c-111.619,0-202.105,90.487-202.105,202.105c0,29.765,24.13,53.895,53.895,53.895h296.421
			c29.765,0,53.895-24.13,53.895-53.895C458.105,346.487,367.619,256,256,256z"
                    />
                </g>
            </g>
        </svg>
    );
};
export const CopyRightIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="copyright"
            width={width}
            height={height}
            fill="var(--text-color)">
            <rect width="256" height="256" fill="none"></rect>
            <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"></circle>
            <path
                fill="none"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"></path>
        </svg>
    );
};
export const SettingIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="setting">
            <g
                fill="none"
                fillRule="evenodd"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                transform="translate(2.5 1.5)">
                <path d="M18.3066362,6.12356982 L17.6842106,5.04347829 C17.1576365,4.12955711 15.9906873,3.8142761 15.0755149,4.33867279 L15.0755149,4.33867279 C14.6398815,4.59529992 14.1200613,4.66810845 13.6306859,4.54104256 C13.1413105,4.41397667 12.7225749,4.09747295 12.4668193,3.66132725 C12.3022855,3.38410472 12.2138742,3.06835005 12.2105264,2.74599544 L12.2105264,2.74599544 C12.2253694,2.22917739 12.030389,1.72835784 11.6700024,1.3576252 C11.3096158,0.986892553 10.814514,0.777818938 10.2974829,0.778031878 L9.04347831,0.778031878 C8.53694532,0.778031878 8.05129106,0.97987004 7.69397811,1.33890085 C7.33666515,1.69793166 7.13715288,2.18454839 7.13958814,2.69107553 L7.13958814,2.69107553 C7.12457503,3.73688099 6.27245786,4.57676682 5.22654465,4.57665906 C4.90419003,4.57331126 4.58843537,4.48489995 4.31121284,4.32036615 L4.31121284,4.32036615 C3.39604054,3.79596946 2.22909131,4.11125048 1.70251717,5.02517165 L1.03432495,6.12356982 C0.508388616,7.03634945 0.819378585,8.20256183 1.72997713,8.73226549 L1.72997713,8.73226549 C2.32188101,9.07399614 2.68650982,9.70554694 2.68650982,10.3890161 C2.68650982,11.0724852 2.32188101,11.704036 1.72997713,12.0457667 L1.72997713,12.0457667 C0.820534984,12.5718952 0.509205679,13.7352837 1.03432495,14.645309 L1.03432495,14.645309 L1.6659039,15.7345539 C1.9126252,16.1797378 2.3265816,16.5082503 2.81617164,16.6473969 C3.30576167,16.7865435 3.83061824,16.7248517 4.27459956,16.4759726 L4.27459956,16.4759726 C4.71105863,16.2212969 5.23116727,16.1515203 5.71931837,16.2821523 C6.20746948,16.4127843 6.62321383,16.7330005 6.87414191,17.1716248 C7.03867571,17.4488473 7.12708702,17.764602 7.13043482,18.0869566 L7.13043482,18.0869566 C7.13043482,19.1435014 7.98693356,20.0000001 9.04347831,20.0000001 L10.2974829,20.0000001 C11.3504633,20.0000001 12.2054882,19.1490783 12.2105264,18.0961099 L12.2105264,18.0961099 C12.2080776,17.5879925 12.4088433,17.0999783 12.7681408,16.7406809 C13.1274382,16.3813834 13.6154524,16.1806176 14.1235699,16.1830664 C14.4451523,16.1916732 14.7596081,16.2797208 15.0389017,16.4393593 L15.0389017,16.4393593 C15.9516813,16.9652957 17.1178937,16.6543057 17.6475973,15.7437072 L17.6475973,15.7437072 L18.3066362,14.645309 C18.5617324,14.2074528 18.6317479,13.6859659 18.5011783,13.1963297 C18.3706086,12.7066935 18.0502282,12.2893121 17.6109841,12.0366133 L17.6109841,12.0366133 C17.17174,11.7839145 16.8513595,11.3665332 16.7207899,10.876897 C16.5902202,10.3872608 16.6602358,9.86577384 16.9153319,9.42791767 C17.0812195,9.13829096 17.3213574,8.89815312 17.6109841,8.73226549 L17.6109841,8.73226549 C18.5161253,8.20284891 18.8263873,7.04344892 18.3066362,6.13272314 L18.3066362,6.13272314 L18.3066362,6.12356982 Z"></path>
                <circle cx="9.675" cy="10.389" r="2.636"></circle>
            </g>
        </svg>
    );
};
export const WriteIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="var(--text-color)"
            viewBox="0 0 24 24"
            id="write">
            <path d="m7.11 11.52-.71 4.94c-.074.59.29 1.14 1.14 1.14l4.94-.71a.996.996 0 0 0 .57-.28c.079-.079 7.83-7.823 7.9-7.91 3.442-3.802-1.975-8.989-5.65-5.65-.087.07-7.832 7.822-7.91 7.9a.996.996 0 0 0-.28.57ZM18 4.02A1.974 1.974 0 0 1 20 6a1.932 1.932 0 0 1-.4 1.18L16.82 4.4A1.935 1.935 0 0 1 18 4.02Zm-8.96 8.11 6.34-6.33 2.82 2.82-6.33 6.34-3.3.47Z"></path>
            <path d="M19 13.125V17a3.003 3.003 0 0 1-3 3H7a3.003 3.003 0 0 1-3-3V8a3.003 3.003 0 0 1 3-3h3.969a1 1 0 0 0 0-2H7a5.006 5.006 0 0 0-5 5v9a5.006 5.006 0 0 0 5 5h9a5.006 5.006 0 0 0 5-5v-3.875a1 1 0 0 0-2 0Z"></path>
        </svg>
    );
};
export const LanguageIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512" fill="var(--text-color)">
            <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z" />
        </svg>
    );
};
export const MoonIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--text-color)" viewBox="0 0 384 512">
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
    );
};
export const LogoIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60px"
            height="60px"
            viewBox="0 0 60 60"
            version="1.1">
            <g id="surface1">
                <rect x="0" y="0" width="60" height="60" fillOpacity="1" fill="var(--white-color)" />
                <path
                    fillOpacity="0"
                    strokeWidth="2"
                    stroke="var(--black-color)"
                    d="M 19.816406 36.078125 L 35.042969 15.90625 L 42.804688 15.90625 L 27.578125 36.078125 L 19.816406 36.078125 "
                />
                <path
                    fillOpacity="0"
                    strokeWidth="2"
                    stroke="var(--black-color)"
                    d="M 29.539062 36.078125 L 37.34375 25.738281 L 45.105469 25.738281 L 37.300781 36.078125 L 29.539062 36.078125 "
                />
                <path
                    fillOpacity="0"
                    strokeWidth="2"
                    stroke="var(--black-color)"
                    d="M 46.164062 37.433594 L 18.863281 37.429688 L 13.835938 44.089844 L 37.433594 44.09375 C 42.148438 44.09375 44.894531 42.175781 46.164062 37.433594 "
                />
                <path
                    fillOpacity="0"
                    strokeWidth="2"
                    stroke="var(--black-color)"
                    d="M 15.25 22.09375 L 28.714844 22.09375 L 33.382812 15.90625 L 13.835938 15.90625 L 15.25 22.09375 "
                />
            </g>
        </svg>
    );
};
export const ThreeDotsIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="dots-three"
            width={width}
            height={height}
            fill="var(--text-color)">
            <rect width="256" height="256" fill="none"></rect>
            <circle cx="128" cy="128" r="16"></circle>
            <circle cx="64" cy="128" r="16"></circle>
            <circle cx="192" cy="128" r="16"></circle>
        </svg>
    );
};
export const EarthIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="var(--text-color)"
            viewBox="0 0 24 24"
            id="public">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path>
        </svg>
    );
};
export const CommentIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" id="comment">
            <path
                fill="var(--text-color)"
                d="M25.784 21.017A10.992 10.992 0 0 0 27 16c0-6.065-4.935-11-11-11S5 9.935 5 16s4.935 11 11 11c1.742 0 3.468-.419 5.018-1.215l4.74 1.185a.996.996 0 0 0 .949-.263 1 1 0 0 0 .263-.95l-1.186-4.74zm-2.033.11.874 3.498-3.498-.875a1.006 1.006 0 0 0-.731.098A8.99 8.99 0 0 1 16 25c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9a8.997 8.997 0 0 1-1.151 4.395.995.995 0 0 0-.098.732z"></path>
        </svg>
    );
};
export const CommentIconFill = ({ width = "24px", height = "24px", fill = "var(--text-color)" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" /></svg>
    );
};
export const ShareIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 64 64" id="share">
            <path
                fill="var(--text-color)"
                d="M6.54 55.08a1.91 1.91 0 0 1-.62-.1 2 2 0 0 1-1.38-2c0-.3 2.06-29.34 31.18-31.62V10.92a2 2 0 0 1 3.43-1.4l19.74 20.16a2 2 0 0 1 0 2.8L39.15 52.64a2 2 0 0 1-3.43-1.4V41c-19.44.74-27.41 13-27.49 13.15a2 2 0 0 1-1.69.93Zm33.18-39.26v7.41a2 2 0 0 1-1.93 2c-18.84.69-25.58 13.24-28 21.31 5-4.32 13.91-9.6 27.81-9.6h.09a2 2 0 0 1 2 2v7.41l15-15.26Z"
                data-name="Arrow"></path>
        </svg>
    );
};
export const SaveIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 32 32"
            id="save"
            fill="var(--text-color)">
            <path d="M23 5H9C7.346 5 6 6.346 6 8v19a1 1 0 0 0 1.614.789L16 21.267l8.386 6.522a.996.996 0 0 0 1.053.109A1 1 0 0 0 26 27V8c0-1.654-1.346-3-3-3zm1 19.956-7.386-5.745a.999.999 0 0 0-1.228-.001L8 24.956V8c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v16.956z"></path>
        </svg>
    );
};
export const CloseIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="var(--text-color)"
            viewBox="0 0 24 24"
            id="close">
            <g data-name="Layer 2">
                <g data-name="close-circle">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.71 11.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z"></path>
                </g>
            </g>
        </svg>
    );
};
export const BackIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 64 64" id="back"><path fill="var(--text-color)" d="M55.991 36.458a16.441 16.441 0 0 1-16.42 16.43H10.009a2 2 0 0 1 0-4h29.562a12.425 12.425 0 0 0 0-24.849h-23.98l6.545 5.381a2 2 0 1 1-2.54 3.09L8.739 23.583c-.024-.02-.042-.044-.065-.065a1.906 1.906 0 0 1-.148-.15l-.016-.015c-.014-.016-.032-.028-.046-.044v-.006c-.021-.025-.036-.054-.055-.08a1.759 1.759 0 0 1-.109-.163c-.008-.013-.019-.025-.026-.039s-.025-.033-.034-.051-.021-.054-.033-.08a2.135 2.135 0 0 1-.072-.178l-.007-.018a1.735 1.735 0 0 1-.087-.353c-.006-.037-.018-.072-.021-.109s0-.071 0-.106-.009-.057-.009-.087.008-.058.009-.088v-.105c0-.035.015-.073.021-.11a1.727 1.727 0 0 1 .087-.353l.007-.018c.022-.061.045-.12.072-.178.012-.026.019-.054.033-.08s.024-.033.034-.051.018-.026.026-.039a1.759 1.759 0 0 1 .107-.163c.019-.026.034-.055.055-.08v-.005c.02-.025.045-.042.066-.066.046-.05.093-.1.144-.144.023-.021.041-.045.065-.065l.01-.009L19.6 11.567a2 2 0 1 1 2.54 3.09l-6.545 5.382h23.98a16.438 16.438 0 0 1 16.416 16.419Z"></path></svg>
    );
};
export const CameraIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width}
            height={height} viewBox="0 0 24 24" id="instagram"><g fill="none" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" data-name="<Group>"><rect width="21" height="21" x="1.5" y="1.5" data-name="<Path>" rx="5.48" ry="5.48"></rect><circle cx="12" cy="12" r="5.5" data-name="<Path>"></circle><circle cx="18" cy="5" r=".5" data-name="<Path>"></circle></g></svg>
    );
};

export const AdjustIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="white"
            viewBox="0 0 24 24" id="image-aspect-ratio"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"></path></svg>
    );
};

export const AddFriendIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width}
            height={height} fill="none" viewBox="0 0 24 24" id="add-user"><path fill="var(--text-color)" fillRule="evenodd" d="M10 5.32843C7.79086 5.32843 6 7.11929 6 9.32843C6 11.5376 7.79086 13.3284 10 13.3284C12.2091 13.3284 14 11.5376 14 9.32843C14 7.11929 12.2091 5.32843 10 5.32843ZM5 9.32843C5 6.56701 7.23858 4.32843 10 4.32843C12.7614 4.32843 15 6.56701 15 9.32843C15 12.0899 12.7614 14.3284 10 14.3284C7.23858 14.3284 5 12.0899 5 9.32843Z" clipRule="evenodd"></path><path fill="var(--text-color)" fillRule="evenodd" d="M2.5164 21.3284H17.4836C17.2263 17.4194 13.9741 14.3284 10 14.3284 6.02588 14.3284 2.7737 17.4194 2.5164 21.3284zM1.5 21.8284C1.5 17.134 5.30558 13.3284 10 13.3284 14.6944 13.3284 18.5 17.134 18.5 21.8284 18.5 22.1046 18.2761 22.3284 18 22.3284H2C1.72386 22.3284 1.5 22.1046 1.5 21.8284zM16.1716 5.82844C16.1716 6.10458 16.3954 6.32844 16.6716 6.32844H22.3284C22.6046 6.32844 22.8284 6.10458 22.8284 5.82844 22.8284 5.5523 22.6046 5.32844 22.3284 5.32844H16.6716C16.3954 5.32844 16.1716 5.5523 16.1716 5.82844z" clipRule="evenodd"></path><path fill="var(--text-color)" fillRule="evenodd" d="M19.5001 9.15686C19.224 9.15686 19.0001 8.933 19.0001 8.65686V3C19.0001 2.72386 19.224 2.5 19.5001 2.5C19.7763 2.5 20.0001 2.72386 20.0001 3V8.65686C20.0001 8.933 19.7763 9.15686 19.5001 9.15686Z" clipRule="evenodd"></path></svg>
    );
};

export const ContentIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width}
            height={height} viewBox="0 0 24 24" id="content">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <g fill="var(--text-color)">
                <path d="M11 5.32L9.625 4.219A1.001 1.001 0 009 4H3a1 1 0 00-1 1v13a1 1 0 001 1h5.649L11 20.85V5.32zM20 4h-6c-.227 0-.447.077-.625.219L12 5.32v15.53L14.351 19H20a1 1 0 001-1V5a1 1 0 00-1-1z">
                </path></g></svg>
    );
};
export const VideoIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width}
            height={height} viewBox="0 0 64 64" id="video"><path fill="var(--text-color)" d="M51.83 56H12.17a10 10 0 0 1-10-10V18a10 10 0 0 1 2.71-6.85 2 2 0 1 1 2.92 2.74A6 6 0 0 0 6.17 18v28a6 6 0 0 0 6 6h39.66a6 6 0 0 0 6-6V18a6 6 0 0 0-6-6H14.76a2 2 0 1 1 0-4h37.07a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10Z"></path><path fill="var(--text-color)" d="M24.88 43.8a3 3 0 0 1-3-3V23.2a3 3 0 0 1 4.42-2.64l16.41 8.8a2 2 0 0 1-1.9 3.52l-14.93-8v14.25l9-4.83a2 2 0 1 1 1.89 3.52L26.3 43.44a3 3 0 0 1-1.42.36Z"></path></svg>
    );
};
export const ImageIcon = ({ width = "24px", height = "24px" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width}
            height={height} viewBox="0 0 512 512" id="image">
            <circle cx="352" cy="160" r="32" fill="none" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32">
            </circle><rect width="384" height="339" x="64" y="87" fill="none" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="32.01" ry="32.01"></rect>
            <path fill="none" stroke="var(--text-color)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m64 288 96-96 96 96 64-64 128 128"></path></svg>
    );
};
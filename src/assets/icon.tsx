export const HomeIcon = ({
  width = "24px",
  height = "24px",
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="home"
    >
      <path
        fill={fill}
        stroke="var(--text-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023"
        transform="translate(2.5 2)"
      ></path>
    </svg>
  );
};
export const SearchIcon = ({
  width = "24px",
  height = "24px",
  fill = "none",
  strokeWidth = "0",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="10 10 82 82"
      id="search"
      fill="var(--text-color)"
      strokeWidth={strokeWidth}
      stroke="var(--text-color)"
    >
      <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
    </svg>
  );
};
export const HeartIcon = ({
  width = "24px",
  height = "24px",
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      id="heart"
      viewBox="0 0 16 16"
    >
      <path
        fill={fill}
        stroke="var(--text-color)"
        d="M5.047 2.506c-2.114 0-3.533 1.711-3.533 3.824 0 2.398 3.35 5.263 6.22 7.176 2.871-1.913 6.182-4.824 6.221-7.176.035-2.113-1.333-3.824-3.447-3.824-.902 0-1.817.477-2.774 1.433-.957-.956-1.785-1.433-2.687-1.433z"
      ></path>
    </svg>
  );
};
export const CreateIcon = ({
  width = "24px",
  height = "24px",
  fill = "none",
  strokeWidth = "1.5",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      id="plus"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="var(--text-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        transform="translate(3 3)"
      >
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
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
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
      fill="#ffffff"

    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M160.00112,152.00142a40,40,0,1,1-.00029-48.013"
      ></path>
    </svg>
  );
};

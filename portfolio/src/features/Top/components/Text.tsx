/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { Typography} from "@mui/material";
import { FontSizeConstants } from "types/font";

const textCSS = css`
    position    : absolute;
    top         : calc(100vh / 2 - 100px);
    left        : 100px;
    font-size   : ${FontSizeConstants.HUGE}px;
    text-align  : center;
    text-shadow: rgba(0,0,0,0.25) 0px 4px 4px;
`;

const WelcomeText = () => {
    return (
        <Typography css={textCSS}>
            Welcome to Shinoda's Portfolio. <br/>
            About me ...
        </Typography>
    )
};

export default WelcomeText;
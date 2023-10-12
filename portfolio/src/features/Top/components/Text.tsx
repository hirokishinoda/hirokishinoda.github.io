/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Typography} from "@mui/material";

const textCSS = css`
    position    : absolute;
    top         : calc(100vh / 2 - 100px);
    left        : 100px;
    text-align  : center;
    text-shadow: rgba(0,0,0,0.25) 0px 4px 4px;
`;

const WelcomeText = () => {
    return (
        <Typography variant="h2" component="p" css={textCSS}>
            Welcome to Shinoda's Portfolio. <br/>
            About me ...
        </Typography>
    )
};

export default WelcomeText;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import TopBackground from "assets/img/TopBackground.jpg"

const backgroundImageCSS = css`
    height: calc(100vh - 140px);
    top: 0;
    left: 0;
    background-repeat  : no-repeat;
    background-size    : cover;
    background-position: center center;
    background-image   : url(${TopBackground});
`;

const BackGroundImage = () => {
    return <Box component="div" css={backgroundImageCSS}/>;
};

export default BackGroundImage;
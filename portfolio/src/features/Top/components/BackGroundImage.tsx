/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopBackground from "assets/img/TopBackground.jpg"

const backgroundImageCSS = css`
    height: 100vh;
    top: 0;
    left: 0;
    background-repeat  : no-repeat;
    background-size    : cover;
    background-position: center center;
    background-image   : url(${TopBackground});
`;

const BackGroundImage = () => {
    return <div css={backgroundImageCSS}/>;
};

export default BackGroundImage;
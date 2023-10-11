
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ColorConstants } from "types/color";

const lineCss = css`
    height: 0;
    padding: 0;
    border: 0;
    border-top: 5px solid ${ColorConstants.HAIZAKURA};
`;

const Line = () => {
    return <hr css={lineCss}/>;
}

export default Line;
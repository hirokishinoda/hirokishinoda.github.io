/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { ColorConstants } from "types/color";

const lineCss = css`
    height: 0;
    padding: 0;
    border: 0;
    border-top: 5px solid ${ColorConstants.HAIZAKURA};
`;

const Line = () => {
    return <Box component="hr" css={lineCss}/>;
}

export default Line;
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";

import Line from "./Line";

const linesCSS = css`margin-top: 10px;`

const HeaderLines = () => {
    return (
        <Box component="div" css={linesCSS}>
            <Line key={"first-line"} />
            <Line key={"second-line"} />
        </Box>
    )
};

export default HeaderLines;
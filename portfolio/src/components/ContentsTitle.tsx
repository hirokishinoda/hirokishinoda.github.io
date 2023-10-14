/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { Typography } from "@mui/material";

import { ColorConstants } from "types/color";
import { ContentTitleProps } from "types/props";

const ContentsTitle = (props:ContentTitleProps) => {
    const textCSS = css`
        width        : fit-content;
        border-bottom: solid 3px ${ColorConstants.OMESHIONANDO};
    `;

    return (
        <Typography variant="h2" css={textCSS}>
            {props.title}
        </Typography>
    );
};

export default ContentsTitle;
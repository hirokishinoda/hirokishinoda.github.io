/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";

import ContentsTitle from "./ContentsTitle";
import { ContentsEntireProps } from "types/props";

const ContentsEntire = (props:ContentsEntireProps) => {
    const contentEntireCSS = css`
        width : 940px;
        height: fit-content;
        margin: 300px auto;
    `;

    const {title, className, children} = props;
    return (
        <Box component="div" css={contentEntireCSS} className={className}>
            <ContentsTitle title={title}/>
            {children}
        </Box>
    );
}

export default ContentsEntire;
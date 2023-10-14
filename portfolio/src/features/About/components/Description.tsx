/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { ColorConstants } from "types/color";

const descriptionBackgroundCSS = css`
    height : 300px;
    width  : 600px;
    border-radius: 10px;
    background-color : ${ColorConstants.OMESHIONANDO};
`;

const descriptionContentCSS = css`
    margin: 10px;
`;

const Description = () => {
    return (
    <Box component="div" color="secondary" css={descriptionBackgroundCSS}>
        <Typography css={descriptionContentCSS}>
            ここに自己紹介を記述
        </Typography>
    </Box>
    )
};

export default Description;
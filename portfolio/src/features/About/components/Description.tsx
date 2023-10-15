/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { ColorConstants } from "types/color";

const Description = () => {
    const descriptionBackgroundCSS = css`
        height : 300px;
        width  : 600px;
        border-radius: 10px;
        background-color : ${ColorConstants.OMESHIONANDO};
    `;

    const descriptionContentCSS = css`
        margin: 10px;
    `;

    return (
    <Box component="div" color="secondary" css={descriptionBackgroundCSS}>
        <Typography css={descriptionContentCSS}>
            {"Shinoda Hirokiと申します。"}
            <br/>
            {"データサイエンティストを目指して修行中。"}
            <br/>
            {"小学生時代にやったポケットモンスターDPに感動してゲームを作るために高専に進学。"}
            <br/>
            {"高専で情報工学を学ぶ課程で深層学習に興味を持ち、大学・大学院に進学。"}
            <br/>
            {"現在は大学院にて深層学習を用いた医療画像からの自動診断について研究中。"}
            <br/>
            {"よろしくお願いいたします。"}
        </Typography>
    </Box>
    )
};

export default Description;
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
            {"小学生時代にやったポケットモンスターDPに感動。"}
            <br/>
            {"プログラムの知識を得るために高専に進学。"}
            <br/>
            {"高専で情報工学を学ぶ課程で深層学習に興味を持つ。"}
            <br/>
            {"高専では”深層学習を用いた降雨量の欠損補間”を研究。"}
            <br/>
            {"データ情報学を学ぶために大学・大学院に進学。"}
            <br/>
            {"大学院では”深層学習を用いた医療画像からの自動診断”を研究。"}
            <br/>
            {"ご興味あれば連絡先まで。"}
            {"よろしくお願いいたします。"}
        </Typography>
    </Box>
    )
};

export default Description;
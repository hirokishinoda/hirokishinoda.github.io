/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Avatar, Box } from "@mui/material";
import Description from "./Description";
import AvatarImage from "assets/img/icon.jpg";

const Profile = () => {
    const descriptionCSS = css`
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
    `;

    const avatarCSS = css`
        height    :300px;
        width     :300px;
    `;

    return (
        <Box component="div" css={descriptionCSS}>
            <Avatar src={AvatarImage} css={avatarCSS}/>
            <Description/>
        </Box>
    )
};

export default Profile;
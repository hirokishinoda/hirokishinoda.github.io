/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/material";

import BackGroundImage from "./BackGroundImage";
import WelcomeText from "./Text";

const Top = () => {
    return (
        <Box component="div" css={css`position:relative;`}>
            <BackGroundImage/>
            <WelcomeText/>
        </Box>
    );
}

export default Top;
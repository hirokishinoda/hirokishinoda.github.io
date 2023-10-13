/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { AppBar, Typography } from "@mui/material";
import TwoLines from "components/TwoLines";

const Footer = () => {
    const footerCSS = css`
        height  : 140px;
    `;

    const linesCSS = css`
        margin-top: 10px;
    `;

    const copyrightCSS = css`
        margin-top: 65px;
        text-align: center;
    `;

    return (
       <AppBar component="footer" position="static" color='secondary' css={footerCSS}>
            <Typography variant="caption" css={copyrightCSS}>
                &copy; 2023 Hiroki Shinoda
            </Typography>    
            <TwoLines css={linesCSS}/>   
        </AppBar>
    );
}

export default Footer;
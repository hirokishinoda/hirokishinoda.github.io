/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";

import ContentsEntire from "components/ContentsEntire";
import IconLink from "./IconLink";
import { KaggleIcon } from "./CustomIcon";

const Contact = () => {
    const divCSS = css`
        display : flex;
    `;

    return (
        <ContentsEntire id="Contact" title="Contact">
            <Box component="div" css={divCSS}>
                <IconLink link="mailto:progac27jhisi@gmail.com">
                    <EmailIcon />
                </IconLink>
                <IconLink link="https://github.com/hirokishinoda">
                    <GitHubIcon />   
                </IconLink>
                <IconLink link="https://www.kaggle.com/hirokishinoda">
                    <KaggleIcon />
                </IconLink>
            </Box>
            
        </ContentsEntire>
    );
}

export default Contact;
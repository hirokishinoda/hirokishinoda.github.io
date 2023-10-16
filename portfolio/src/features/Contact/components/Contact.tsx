/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import KaggleIcon from "assets/img/kaggle_icon.png";
import { Avatar, Box, Link } from "@mui/material";
import { ColorConstants } from "types/color";

import ContentsEntire from "components/ContentsEntire";

const Contact = () => {
    
    const iconCSS = css`
        margin           : 5px;
        background-color : ${ColorConstants.JINZAMOMI};
    `;

    const divCSS = css`
        display : flex;
    `;


    return (
        <ContentsEntire id="Contact" title="Contact">
            <Box component="div" css={divCSS}>
                <Link href="mailto:progac27jhisi@gmail.com" underline="none" target="_blank" rel="noopener noreferrer">
                    <Avatar css={iconCSS}>
                        <EmailIcon />
                    </Avatar>
                </Link>
                <Link href="https://github.com/hirokishinoda" underline="none" target="_blank" rel="noopener noreferrer">
                    <Avatar css={iconCSS}>
                        <GitHubIcon />
                    </Avatar>
                </Link>
                <Link href="https://github.com/hirokishinoda" underline="none" target="_blank" rel="noopener noreferrer">
                    <Avatar src={KaggleIcon} css={iconCSS} />
                </Link>  
            </Box>
            
        </ContentsEntire>
    );
}

export default Contact;
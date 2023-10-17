/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import { Box, Link, Typography } from "@mui/material";

import { ColorConstants } from "types/color";
import { AchievementDescriptionProps, AchievementTitleProps } from "../types/achievement";

const AchievementTitle = ({ title, url } : AchievementTitleProps) => {
    const titleCSS = css`
        height      : 40px;
        line-height : 40px;
        color       : ${ColorConstants.IMAYOU};
    `;

    return (
        <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
            <Typography variant='h3' css={titleCSS}>
                {title}
            </Typography>
        </Link>   
    )
};

const AchievementDescription = ({ description } : AchievementDescriptionProps) => {
    const backgroundBoxCSS = css`
        background-color: ${ColorConstants.OMESHIONANDO};
        border-radius   : 10px;
        margin          : 10px 0px;
        height          : 85px;
        overflow        : hidden;
        display         : flex;
        align-items     : center;
    `; 

    const textCSS = css`
        margin     : 10px;
        white-space: pre-wrap;
    `;

    return (
        <Box component="div" css={backgroundBoxCSS}>
            <Typography css={textCSS}>
                {description}
            </Typography>
        </Box>
    )
       
};

const TimelineMarks = () => {
    const dotCSS = css`
        margin : 0px;
        background-color : ${ColorConstants.IMAYOU};
    `;

    const connectorCSS = css`
        background-color : ${ColorConstants.IMAYOU};
    `;

    return (
        <TimelineSeparator>
            <TimelineDot css={dotCSS}>
                <HistoryEduIcon />
            </TimelineDot>
            <TimelineConnector css={connectorCSS} />
        </TimelineSeparator>
    )
};

export {AchievementTitle, AchievementDescription, TimelineMarks};
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

import { Box, Link, Typography } from "@mui/material";
import { ColorConstants } from "types/color";
import { Achievement } from "../types/achievement";

const AchievementsTitle = ({ title } : { title : string }) => {
    const titleCSS = css`
        height      : 40px;
        line-height : 40px;
    `;

    return (
        <Typography variant='h3' css={titleCSS}>
            {title}
        </Typography>
    )
};

const AchievementsDescription = ({ description } : { description : string }) => {
    const backgroundBoxCSS = css`
        background-color: ${ColorConstants.OMESHIONANDO};
        border-radius   : 10px;
        height          : 100px;
        margin          : 10px 0px;
        overflow        : hidden;
    `; 

    const textCSS = css`
        margin: 10px;
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

const AchievementContent = ({title, description, url} : Achievement) => {
    const alignLeft = css`
        &::before{
            flex   : 0;
            padding: 0px;
        }
    `;

    const contentCSS = css`
        padding-top : 0px;
    `;

    return (
        <TimelineItem css={alignLeft}>
            <TimelineMarks />
            <TimelineContent css={contentCSS}>
                <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
                    <AchievementsTitle title={title} />
                </Link>   
                <AchievementsDescription description={description} />
            </TimelineContent>  
        </TimelineItem>
    )
};

export default AchievementContent;
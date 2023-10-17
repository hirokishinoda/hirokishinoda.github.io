/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

import { Achievement } from "../types/achievement";
import { AchievementDescription, AchievementTitle, TimelineMarks } from "./AchievementParts";

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
                <AchievementTitle title={title} url={url}/>
                <AchievementDescription description={description} />
            </TimelineContent>  
        </TimelineItem>
    )
};

export default AchievementContent;
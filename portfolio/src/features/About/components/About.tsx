/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import { Box } from "@mui/material";

import Contents from "./Contents";
import ContentsTitle from "components/ContetsTitle";

const aboutCSS = css`
    width : 940px;
    height: fit-content;
    margin: 300px auto;
`;

const About = () => {
    return (
            <Box component="div" css={aboutCSS}>
                <ContentsTitle title="About"/>
                <Contents/>
            </Box>
    );
}

export default About;
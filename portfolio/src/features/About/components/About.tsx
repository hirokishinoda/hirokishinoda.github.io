/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

import Profile from "./Profile";
import ContentsEntire from "components/ContentsEntire";

const aboutCSS = css`
    width : 940px;
    height: fit-content;
    margin: 300px auto;
`;

const About = () => {
    return (
        <ContentsEntire title="About" css={aboutCSS}>
            <Profile/>
        </ContentsEntire>
    );
}

export default About;
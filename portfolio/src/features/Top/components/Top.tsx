/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BackGroundImage from "./BackGroundImage";
import WelcomeText from "./Text";
import Triangle from "./Triangle";

const Top = () => {
    return (
        <div css={css`position:relative;`}>
            <BackGroundImage/>
            <WelcomeText/>
        </div>
    );
}

export default Top;
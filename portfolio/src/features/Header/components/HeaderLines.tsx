import Line from "./Line";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HeaderLines = () => {
    return (
        <div css={css`margin-top: 10px;`}>
            <Line key={"first-line"} />
            <Line key={"second-line"} />
        </div>
    )
};

export default HeaderLines;
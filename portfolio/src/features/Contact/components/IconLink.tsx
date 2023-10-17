/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ReactNode } from "react";
import { Avatar, Link } from "@mui/material";
import { ColorConstants } from "types/color";

type IconLinkProps = {
    link     : string,
    children : ReactNode;
};

const IconLink = (props : IconLinkProps) => {
    const iconCSS = css`
        margin           : 5px;
        background-color : ${ColorConstants.JINZAMOMI};
    `;

    return (
        <Link href={props.link} underline="none" target="_blank" rel="noopener noreferrer">
            <Avatar css={iconCSS}>
                {props.children}
            </Avatar>
        </Link>

    )
}

export default IconLink;
import { Box } from "@mui/material";

import ContentsTitle from "./ContentsTitle";
import { ContentsEntireProps } from "types/props";

const ContentsEntire = (props:ContentsEntireProps) => {
    const {title, className, children} = props;
    return (
        <Box component="div" className={className}>
            <ContentsTitle title={title}/>
            {children}
        </Box>
    );
}

export default ContentsEntire;
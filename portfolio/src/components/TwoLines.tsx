import { Box } from "@mui/material";

import Line from "./Line";
import { TwoLinesProps } from "types/props";

const TwoLines = (props:TwoLinesProps) => {
    return (
        <Box component="div" className={props.className}>
            <Line key={"first-line"} />
            <Line key={"second-line"} />
        </Box>
    )
};

export default TwoLines;
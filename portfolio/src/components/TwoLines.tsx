import { Box } from "@mui/material";

import Line from "./Line";
import { twoLinesProps } from "types/twoLines";

const TwoLines = (props:twoLinesProps) => {
    return (
        <Box component="div" className={props.className}>
            <Line key={"first-line"} />
            <Line key={"second-line"} />
        </Box>
    )
};

export default TwoLines;
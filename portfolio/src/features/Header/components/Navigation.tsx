/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Button } from '@mui/material';

const navigationCSS = css`
    margin-right : 50px;
    margin-bottom: 10px;
`;

const Navigation = (props:NavigationProps) => {
    return (
        <Box css={navigationCSS}>
            {props.navItems.map(item => {
                return (
                    <Button key={item} sx={{color: "secondary.contrastText", fontSize: "h3.fontSize"}}>
                        {item}
                    </Button>
                );
            })}
        </Box>
    );
};

export default Navigation;
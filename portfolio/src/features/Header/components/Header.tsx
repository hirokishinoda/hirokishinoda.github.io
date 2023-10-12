/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import HeaderLines from './HeaderLines';
import Navigation from './Navigation';

const Header = () => {
    const navItems : Array<string> = ["About", "Works", "Achievements", "Contact"];

    const appBarCSS = css`
        box-shadow : none;
        height     : 140px;
    `;

    const toolBarCSS = css`
        height         : 100%;
        display        : flex;
        justify-content: flex-end;
        align-items    : flex-end;
    `;

    return (
    <AppBar position="static" color='secondary' css={appBarCSS}>
        <HeaderLines/>
        <Toolbar css={toolBarCSS}>
            <Navigation navItems={navItems}/>
        </Toolbar>
    </AppBar>
    );
};

export default Header;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Navigation from './Navigation';
import TwoLines from 'components/TwoLines';

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

    const linesCSS = css`margin-top: 10px;`;

    return (
    <AppBar position="static" color='secondary' css={appBarCSS}>
        <TwoLines css={linesCSS}/>
        <Toolbar css={toolBarCSS}>
            <Navigation navItems={navItems}/>
        </Toolbar>
    </AppBar>
    );
};

export default Header;
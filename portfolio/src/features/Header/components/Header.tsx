import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button } from '@mui/material';
import { FontSizeConstants } from 'types/font';
import HeaderLines from './HeaderLines';

const Header = () => {
        
    const navItems : Array<String> = ["About", "Works", "Achievements", "Contact"];

    return (
    <AppBar position="static" 
            color='secondary' 
            sx={{ boxShadow : 0,
                  height    : "140px"}}>
        <HeaderLines/>
        <Toolbar sx={{display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      height: "100%"}}>
            <Box sx={{marginRight: "50px",
                      marginBottom: "10px"}}>
                {navItems.map(item => {
                    return (
                        <Button key={item} 
                                sx={{color: "secondary.contrastText", 
                                    fontSize: FontSizeConstants.NORMAL}}>
                            {item}
                        </Button>
                    );
                })}
            </Box>
        </Toolbar>
    </AppBar>
    );
};

export default Header;
// CREATED BY: ANSARI KAMAL

import {
    AppBar,
    Typography,
} from "@mui/material";

import {style} from './Footer.style' 

const Footer = () => {
    return (
        <AppBar position="relative" sx={style.footer}>
            <Typography variant="subtitle1" align='center'>
                All Rights Reserved
            </Typography>
        </AppBar>
    )
}

export default Footer
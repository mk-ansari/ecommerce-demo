// CREATED BY: ANSARI KAMAL

import { Typography, Box } from "@mui/material";

import { style } from "./Footer.style";

const footer = () => {
	return (
		<Box sx={style.footer}>
			<Typography variant="subtitle1">All rights reserved.</Typography>
		</Box>
	);
};

export default footer;

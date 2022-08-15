// CREATED BY: ANSARI KAMAL

import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Drawer,
	Box,
	Typography,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemText,
	Badge
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { style } from "./Header.style";


export default function ButtonAppBar() {
	const navigate = useNavigate();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const auth = localStorage.getItem('user');

	const logout = () => {
		localStorage.removeItem('user');
		navigate('/signin')
	}

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar component="nav" sx={style.appbar}>
					<Toolbar>
						<IconButton
							onClick={() => setIsDrawerOpen(true)}
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							component={Link}
							to="/"
							sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
						>
							Amazon
						</Typography>
						{
							auth ?
								<>
									<Button color="inherit" component={NavLink} to="/profile">
										{JSON.parse(auth).name}
									</Button>
									<Button color="inherit" onClick={logout} component={NavLink} to="/signin">
										Logout
									</Button>
								</>

								:
								<>
									<Button color="inherit" component={NavLink} to="/cart">
										<Badge badgeContent={0} color="primary">
											Cart
										</Badge>
									</Button>
									<Button color="inherit" component={NavLink} to="/signin">
										Signin
									</Button>
								</>
						}

					</Toolbar>
				</AppBar>
			</Box>
			<Drawer
				anchor="left"
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
			>
				<Box p={2} width="240px" role="presentation" textAlign="center">
					<Typography variant="h6" component="div">
						Shopping Categories
					</Typography>
					<List>
						<Divider />
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Pants" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Shirts" />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</>
	);
}

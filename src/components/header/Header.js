import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import images from '../../images/images';

import { Link } from "react-router-dom";

const menumobile = [
	{
		to: '/',
		name: 'Home'
	},

];

const menuItens = [
	{
		to: '/',
		name: 'Home'
	},

];

const settings = [
	{
		href: 'https://www.instagram.com/henri_santosz021/',
		name: 'Instagram',
		icon: 'mdi:instagram',
		alvo: '"_blank"'
	},
	{
		href: 'https://www.linkedin.com/in/paulo-souza-82a123248/',
		name: 'LinkedIn',
		icon: 'mdi:linkedin',
		alvo: '"_blank"'
	},
	{
		href: 'https://github.com/henrique-souza-paulo',
		name: 'GitHub',
		icon: 'mdi:github',
		alvo: '"_blank"'
	},
	{
		href: 'https://www.google.com',
		name: 'Logout'

	}
];

export default function Header() {
	//Menu de Nav
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
	const handleCloseNavMenu = () => { setAnchorElNav(null); };

	//Menu de Usuario
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const handleOpenUserMenu = (event) => { setAnchorElUser(event.currentTarget); };
	const handleCloseUserMenu = () => { setAnchorElUser(null); };

	return (
		<AppBar position="static" color='transparent' sx={{ marginBottom: 2, marginTop: 1 }}>
			<Container maxWidth="xl">
				{/* Linha de cima */}
				<Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
					{/* Titulo da Pagina */}
					<Typography
						component="h2"
						variant="h5"
						color="black"
						align="center"
						noWrap
						sx={{ flex: 1 }}>
						Meu Portifolio
					</Typography>

					{/* Menu responsivo para dispositivo movel */}
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' }
						}}>

						{menumobile.map((option, index) => (
							<MenuItem key={index} onClick={handleCloseUserMenu}>
								<Link to={option.to} style={{ textDecoration: 'none' }}>
									<Typography textAlign="center" color="black">{option.name}</Typography>
								</Link>
							</MenuItem>))}
					</Menu>

					{/* Foto de usuario com menu */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Mais informações">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src={images.LogoUser} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings.map((setting, index) => (
								<MenuItem key={index} onClick={handleCloseUserMenu}>
									<a href={setting.href} style={{ textDecoration: 'none' }} target={setting.alvo}>
										<Typography textAlign="center" color="black">{setting.name}</Typography>
									</a>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>

				{/* Menu que aparece quando a tela diminui */}
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit">
						<MenuIcon />
					</IconButton>
				</Box>


				{/* Menu de itens */}
				<Toolbar
					component="nav"
					variant="dense"
					sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>

					{menuItens.map((option, index) => (
						<Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
							<Link to={option.to} style={{ textDecoration: 'none' }}>
								<Typography textAlign="center" color="black">{option.name}</Typography>
							</Link>
						</Button>))}
				</Toolbar>
			</Container>
		</AppBar >
	);
}

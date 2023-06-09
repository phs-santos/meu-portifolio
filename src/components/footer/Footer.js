import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © Meu Portifolio '}{new Date().getFullYear()}{'.'}
		</Typography>
	);
}

function Footer() {

	return (
		<Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					Meu Portifilio
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
					Aprendendo cada dia mais!
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
export default Footer;

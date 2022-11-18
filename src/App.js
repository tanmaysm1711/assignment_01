import './App.css';
import Box from '@mui/material/Box';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

function App() {
	return (
		<Box sx={{ 
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: '10vh',
			paddingInline: '4rem',
			background: "#FFFFFF",
			boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.14)"
		}}>
			<h1 style={{ margin: 0 }}>The Basket</h1>
			<ShoppingBasketRoundedIcon sx={{ width: '36px', height: '36px' }}/>
		</Box>
	);
}

export default App;

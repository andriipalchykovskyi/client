import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';

type HeaderProps = {
  cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          Pizza Store
        </Typography>

        <Button color="inherit" component={Link} to="/cart">
          Кошик ({cartCount})
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

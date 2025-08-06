import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Ласкаво просимо до Pizza Store 🍕
      </Typography>
      <Typography variant="body1">
        Обирай піцу — і ми доставимо її миттєво!
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        До меню
      </Button>
    </Container>
  );
};

export default Home;

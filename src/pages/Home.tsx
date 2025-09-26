import { Container, Typography } from '@mui/material';
import Cards from '../features/cards/Cards';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Ласкаво просимо до Pizza Store 🍕
      </Typography>
      <Typography variant="body1">
        Обирай піцу — і ми доставимо її миттєво!
      </Typography>

      <Cards />
    </Container>
  );
};

export default Home;

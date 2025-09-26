import React from 'react';
import { Grid } from '@mui/material';
import CardFeature from '../card/CardFeature';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Піца Маргарита',
    description:
      'Класична піца, рецепт якої був запозичений у італійців. Соус на томатній основі, мікс сирів, помідори.',
    image:
      'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163818246-default-293x170.jpg',
  },
  {
    id: 2,
    title: 'Піца Веганська',
    description:
      'Дієтична піца з вишуканим овочевим смаком! Соус на томатній основі, помідори, печериці, цибуля маринована, кукурудза, перець болгарський, броколі, кабачок.',
    image:
      'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163849934-default-293x170.jpg',
  },
  {
    id: 3,
    title: 'Піца Тоні Пепероні',
    description:
      'Піца на пікантно-гострому соусі з додаванням міксу сирів, салямі, солодкого болгарського перцю, цибулі.',
    image:
      'https://pizzburg.com.ua/image/cache/catalog/УЖАТЫЕ%20ПИЦЦЫ/1539163947223-default-293x170.jpg',
  },
];

const Cards: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
  {cards.map((card) => (
    <Grid item xs={12} sm={6} md={4} key={card.id} display="flex">
      <CardFeature
        title={card.title}
        description={card.description}
        image={card.image}
      />
    </Grid>
  ))}
</Grid>

  );
};

export default Cards;

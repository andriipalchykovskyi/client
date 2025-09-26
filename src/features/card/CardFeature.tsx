import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import useStyles from './CardFeature.styles';

interface CardFeatureProps {
    image: string;
    title: string;
    description: string;
    onAddToCart?: () => void;
}

const CardFeature: React.FC<CardFeatureProps> = ({ image, title, description, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                className={classes.media}
            />
            <CardContent className={classes.content}>
                <Typography variant="h5" component="div" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.description}>
                    {description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={onAddToCart}
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default CardFeature;
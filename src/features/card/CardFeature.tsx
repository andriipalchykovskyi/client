import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import useStyles from './CardFeature.styles';

interface CardFeatureProps {
    image: string;
    title: string;
    description: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ image, title, description }) => {
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
            </CardContent>
        </Card>
    );
};

export default CardFeature;
import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Container, Grid } from '@mui/material';
import './ImageSliderCard.css';

// Import images
import ss1 from './ss1.jpg';
import ss2 from './ss2.jpg';
import ss3 from './ss3.jpg';
import ss4 from './ss4.jpg';
import ss5 from './ss5.jpg';
import ss6 from './ss6.jpg';
import ss7 from './ss7.jpg';
import ss8 from './ss8.jpg';
import ss9 from './ss9.jpg';
import ss10 from './ss10.jpg';
import ss11 from './ss11.jpg';
import ss12 from './ss12.jpg';
import ss13 from './ss13.jpg';
import ss14 from './ss14.jpg';
import ss15 from './ss15.jpg';
import ss16 from './ss16.jpg';

const imagesArray = [
    [ss1, ss2, ss3, ss4],
    [ss5, ss6, ss7, ss8],
    [ss9, ss10, ss11, ss12],
    [ss13, ss14, ss15, ss16],
];

const ImageSliderCard = () => {
    const [indices, setIndices] = useState([0, 0, 0, 0]);

    const nextImage = (cardIndex) => {
        setIndices((prevIndices) =>
            prevIndices.map((index, i) => (i === cardIndex ? (index + 1) % imagesArray[cardIndex].length : index))
        );
    };

    useEffect(() => {
        const intervals = indices.map((_, index) => setInterval(() => nextImage(index), 2000));
        return () => intervals.forEach((interval) => clearInterval(interval));
    }, []);

    return (
        <Container>
            <Typography variant="h6" className="forh2"><h2>Graphic novels and comics Books</h2><hr /></Typography>
            <Grid container spacing={4} className="card-sec">
                {imagesArray.map((images, cardIndex) => (
                    <Grid item xs={12} sm={6} md={3} key={cardIndex}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={images[indices[cardIndex]]}
                                alt={`Slide ${indices[cardIndex]}`}
                                className="slide-image"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">Card Title {cardIndex + 1}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Card description goes here. It can include some details about the images shown above.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ImageSliderCard;

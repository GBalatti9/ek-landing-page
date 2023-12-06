import React from 'react';
import { Box } from "@mui/material";

import backgroundImage from '../../assets/imgs/buildings/rio.jpeg';
import { BackgroundImage } from './BackgroundImage/BackgroundImage';
import quote1 from '../../assets/imgs/buyers/testimonio1.webp';
import quote2 from '../../assets/imgs/buyers/testimonio2.webp';
import quote3 from '../../assets/imgs/buyers/testimonio3.webp';
import { CardQuotes } from './CardQuotes/CardQuotes';

const quotes = [
    { id: 1, image: quote1, quote: 'La calidad de los servicios acordados podría calificarlos como excelentes, desde el principio me atendieron muy bien, fueron super receptivos a todas las preguntas que hice como Inversor y el resultado está a la vista', building: 'Propietario en Paseo de la Cisterna' },
    { id: 2, image: quote2, quote: 'El departamento me parecio fantastico, tiene mucha iluminación, hay calidad de materiales. Dudo que en la Argentina haya algo similar', building: 'Propietario en Paseo de la Cisterna' },
    { id: 3, image: quote3, quote: 'El departamento tiene una ubicación única y vistas increibles. Mucha luz y mucho potencial. El Estudio Kohon es hiper profesional', building: 'Propietarios en Paseo de la Cisterna' }
]

export const FourthSectionApp = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                p: 2
            }}
        >
            <BackgroundImage backgroundImage={backgroundImage} />
            <CardQuotes quotes={ quotes }/>
        </Box>
    )
}

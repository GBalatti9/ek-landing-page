import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ImageGallery, Form } from '..';

export const FormContainer = () => {
    return (
        <Grid container sx={{ p: { xs: 'none', md: 3 }, width: '100%' }}>
            <Typography variant='h4' sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold', p: 2}}>
                No hay nada más seguro que invertir en ladrillos
                <br />
                <Typography variant='p' sx={{ fontWeight: '300', fontSize: '2rem', display: { xs: 'none', md: 'block' } }}> Coordiná una visita 100% personalizada y asesorate </Typography>
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row'} }}>
                <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                    <Form sx={{ id: 'secondSection' }}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{ width: '100%' }}>
                    <ImageGallery />
                </Grid>
            </Box>
        </Grid>
    );
};

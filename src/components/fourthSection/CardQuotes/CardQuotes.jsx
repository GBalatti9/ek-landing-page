import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { QuotesItem } from './QuotesItem'
import { scrollToNextSection } from '../../helpers/Scroll'

export const CardQuotes = ({ quotes }) => {
    return (
        <>
        <Typography 
            variant='h4' 
            sx={{ 
                fontWeight: 'bold', 
                textAlign: 'center', 
                mb: 2, 
                color: 'white', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    La opinión de nuestros clientes
        </Typography>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <QuotesItem quotes={ quotes }/>
        </Grid>
        <div style={{ textAlign: 'center' }}>
            <Button
                variant="contained"
                sx={{ mt: 6, fontSize: '1.2rem' }}
                onClick={scrollToNextSection}>
                    Quiero más información
            </Button>
        </div>
        </>
    )
}

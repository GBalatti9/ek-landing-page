import { Grid, Typography } from '@mui/material';
import React from 'react';

export const IconsAndText = ({ icons }) => {
    return (
        <>
            {
                icons.map((icon) => (
                        <Grid item
                            key = { icon.id }
                            xs  = { 12 }
                            md  = { 4 }
                            sx={{ p: 5, textAlign: 'center', color: 'white' }}>
                                {React.cloneElement(icon.icon, { style: { fontSize: '10rem' } })}
                            <Typography variant='h6' sx={{ color: 'white', textAlign: 'center', width: '75%', m: 'auto' }}>
                                { icon.info }
                            </Typography>
                        </Grid>
                ))
            }
        </>
    )
}

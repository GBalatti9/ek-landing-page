import { Box, Grid, Typography } from '@mui/material'

export const QuotesItem = ({ quotes }) => {
    return (
        <>
            {
                quotes.map(( quote ) => (
                    <Grid item xs={12} md={3} 
                    sx={{ backgroundColor: '#00A7CE', boxShadow: 3, borderRadius: 2, p: 2, color: 'white', textAlign: 'center', m: 2}}
                    key={ quote.id }>
                        <Box>
                            <div style={{textAlign: 'center', padding: '10px'}}>
                                <img src={quote.image} alt={quote.building}/>
                            </div>
                            <Typography variant='p' sx={{ textAlign: 'center', fontSize: '1.1rem'}}>
                                {quote.quote}
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='p' sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                                {quote.building}
                            </Typography>
                        </Box>
                    </Grid>
                ))
            }
        </>
    )
}

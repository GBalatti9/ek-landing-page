import { Typography, Button, Box } from "@mui/material"
import { scrollToNextSection } from "../../helpers/Scroll"

export const TitleApp = () => {

    return (
        <Box sx={{
            maxWidth: {
                md: '600px',
                lg: '540px',
            },
        }}>
            <Typography
                variant="h1"
                sx={{
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    fontSize: {
                        xs: '2.6rem',
                        md: '3rem',
                        lg: '4rem'
                    },
                    mb: {
                        xs: 2
                    },
                    mt: {
                        md: 2
                    },
                    whiteSpace: {
                        xs: 'normal',  
                        md: 'pre-line',
                    },
                }}>
        
                {window.innerWidth >= 780 ? (
                    <>
                        El departamento{'\n'}
                        de tus sueños en{'\n'}
                    </>
                ) : (
                    <>
                        El departamento de tus{'\n'}
                        sueños en{' '}
                    </>
                )}
                <span className="underline">Estudio Kohon</span>

            </Typography>
            <Box sx={{ width: '90%', display: { xs: 'none', md: 'block' }, m: 'auto', textAlign: 'center'}}>
                <Typography variant="p" sx={{ color: 'white', fontSize: '1.1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', width: '80%' }}>
                    Descubre nuestras opciones inmobiliarias en venta y oportunidades de inversiones.
                </Typography>
            </Box>
            <Box sx={{ mt: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <Button
                    variant="contained"
                    sx={{ mt: 1, fontSize: '1.2rem' }}
                    onClick={scrollToNextSection}>
                    Quiero más información
                </Button>
                <Typography sx={{ color: 'white', fontSize: '1.1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', pl: 1 }}>
                    +1000 clientes satisfechos</Typography>

            </Box>
        </Box>
    )
}

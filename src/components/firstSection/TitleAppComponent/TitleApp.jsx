import { Typography, Button } from "@mui/material"
import { scrollToNextSection } from "../../helpers/Scroll"

export const TitleApp = () => {

    return (
        <div>
            <Typography 
                variant="h1" 
                sx={{ 
                    fontSize: '2.6rem',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    '@media (min-width: 600px)': {
                        fontSize: '4.5rem',
                        textAlign: 'inherit',
                    },}}>

                El departamento de tus sueños en
                <span className="underline"> Estudio Kohon</span> 
                </Typography>
            <Button 
                variant="contained"
                sx={{ mt: 1, fontSize: '1.2rem', display: { xs: 'none', md: 'block' } }}
                onClick={scrollToNextSection}>
                    Quiero más información
            </Button>
        </div>
    )
}

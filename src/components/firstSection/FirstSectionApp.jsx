import { Box, Container, Grid } from "@mui/material";
import { VideoComponent } from "./VideoComponent/VideoComponent";
import { TitleApp } from "./TitleAppComponent/TitleApp";

import backgroundImage from "../../assets/imgs/paseo-bolivar-proyecto.webp";

export const FirstSectionApp = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    zIndex: -1,
                }}
            />
            <Container
                sx={{
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <TitleApp />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <VideoComponent />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

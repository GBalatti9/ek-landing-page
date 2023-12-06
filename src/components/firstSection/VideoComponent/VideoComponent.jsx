import { Box, Button } from "@mui/material";
import video from '../../../assets/videos/Institucional.mp4';
import styled from "styled-components";
import { scrollToNextSection } from "../../helpers/Scroll";

const StyledVideo = styled.video`
border-radius: 5px;
width: 100%;
height: 100%;
object-fit: cover;
box-shadow: 1px 1px 10px black;
`;

export const VideoComponent = () => {
    return (
        <Box>
            <StyledVideo
                autoPlay
                loop
                muted
                controls
            >
                <source
                    src={video}
                    type="video/mp4"
                />
            </StyledVideo>
            <Box sx={{ textAlign: 'center' }}> 
                <Button
                    variant="contained"
                    sx={{ mt: 1, fontSize: '1.4rem', display: { xs: 'block', md: 'none' }, width: '100%' }}
                    onClick={scrollToNextSection}>
                        Quiero más información
                </Button>
            </Box>
        </Box>
    );
};

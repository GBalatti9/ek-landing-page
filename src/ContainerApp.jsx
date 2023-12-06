import { Box } from "@mui/material";
import { FirstSectionApp, FourthSectionApp, SecondSectionApp, ThirdSectionApp } from "./components";



export const ContainerApp = () => {
    return (
        <Box sx={{ position: 'relative' }}>
            <FirstSectionApp />
            <SecondSectionApp />
            <ThirdSectionApp />
            <FourthSectionApp />
        </Box>
    );
};

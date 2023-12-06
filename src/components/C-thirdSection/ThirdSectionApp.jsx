import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { IconsAndText } from './IconsAndText';
import { Grid } from '@mui/material';


const icons = [
    { id: 1, icon: <WorkspacePremiumOutlinedIcon />, info: '+ de 100.000 m2 construidos y 46 años de experiencia' },
    { id: 2, icon: <ApartmentOutlinedIcon />, info: '28 edificios construidos y 7 proyectos en ejecución' },
    { id: 3, icon: <MonetizationOnOutlinedIcon />, info: 'Consultá opciones de financiación' },
]

export const ThirdSectionApp = () => {
    return (
        <Grid container
            sx={{ backgroundColor: '#0073FF'}}>
            <IconsAndText icons = { icons } />
        </Grid>
    )
}

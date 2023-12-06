import { Box } from "@mui/material"
import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from "../../../assets/index";
import { ImageListComponent } from "./ImageListComponent";


const itemsData = [
    { id: 1, img: image1, title: 'Petit Conesa' },
    { id: 2, img: image2, title: 'Paseo Bolivar' },
    { id: 3, img: image3, title: 'Edificio de la Flor II' },
    { id: 4, img: image4, title: 'Rivera Mystic' },
    { id: 5, img: image5, title: 'Paseo de la Cisterna' },
    { id: 6, img: image6, title: 'Casa Correa' },
    { id: 7, img: image7, title: 'Casa Correa' },
    { id: 8, img: image8, title: 'Rio 4' },
    { id: 9, img: image9, title: 'Terrazas de Núñez' },
]


export const ImageGallery = () => {

    return (
        <Box sx={{ p: { md: 3 } }}>
            <ImageListComponent itemsData={ itemsData }/>
        </Box>
    )
}

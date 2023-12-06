import { Box } from "@mui/material"
import image1 from '../../../assets/imgs/buildings/local.webp'
import image2 from '../../../assets/imgs/buildings/paseo-bolivar-proyecto.webp'
import image3 from '../../../assets/imgs/buildings/delaflor.webp'
import image4 from '../../../assets/imgs/buildings/fachada-1.webp'
import image5 from '../../../assets/imgs/buildings/galer_2.webp'
import image6 from '../../../assets/imgs/buildings/render2.webp'
import image7 from '../../../assets/imgs/buildings/render6.webp'
import image8 from '../../../assets/imgs/buildings/render7.webp'
import image9 from '../../../assets/imgs/buildings/terrazas-4.jpg'

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

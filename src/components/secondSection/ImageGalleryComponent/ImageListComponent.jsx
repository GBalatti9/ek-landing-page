import { DialogItem } from './DialogItem';
import { ImageItem } from './ImageItem';
import { useDialog } from './useDialog'
import { ImageList } from '@mui/material';

export const ImageListComponent = ({ itemsData }) => {

    const { open, selectedImage, handleCloseDialog, handleImageClick } = useDialog();

    return (
        <>
            <ImageList sx={{ width: '100%', height: '100%', borderRadius: 2, boxShadow: 1 }} cols={3} rowHeight={164}>
                <ImageItem data = { itemsData } handleImageClick = { handleImageClick } />
            </ImageList>

            <DialogItem open = { open } onClose = { handleCloseDialog } selectedImage = { selectedImage } />
        </>
    )
}

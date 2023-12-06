import { useState } from "react";

export const useDialog = () => {

    const [ open, setOpen ] = useState( false );
    const [ selectedImage, setSelectedImage ] = useState( null );

    const handleImageClick = (item) => {
        console.log({ item });
        setSelectedImage(item);
        setOpen(true);
    }

    const handleCloseDialog = () => {
        setOpen(false);
    }
    
    return{
        open,
        selectedImage,
        handleImageClick,
        handleCloseDialog,
    }
}

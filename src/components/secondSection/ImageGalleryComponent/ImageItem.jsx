import { ImageListItem } from "@mui/material"


export const ImageItem = ({ data, handleImageClick }) => {
    return (
        <>
            {data.map((item) => (
                <ImageListItem key={item.img} onClick={() => handleImageClick(item)}>
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        style={{ cursor: 'pointer' }}
                    />
                </ImageListItem>
            ))}
        </>
    )
}

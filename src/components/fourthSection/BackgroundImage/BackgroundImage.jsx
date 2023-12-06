import { Box } from '@mui/material'
import React from 'react'

export const BackgroundImage = ({ backgroundImage }) => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    zIndex: -1,
                }}
            />
        </>
    )
}

import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

export const DialogItem = ({ open, handleCloseDialog, selectedImage }) => {
    return (
        <Dialog open={open} onClose={handleCloseDialog} >
                <DialogContent>
                    <img
                        src={selectedImage?.img}
                        alt={selectedImage?.title}
                        style={{ width: '100%', height: 'auto', maxWidth: '600px', maxHeight: '400px', cursor: 'pointer' }}
                    />
                    <Typography variant="h5">{selectedImage?.title}</Typography>

                </DialogContent>
            </Dialog>
    )
}

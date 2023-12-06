import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

export const DialogFormSubmit = ({ open, onClose }) => {

    return (
        <Dialog
            open    = { open }
            onClose = { onClose }
            aria-labelledby = "alert-dialog-title"
            aria-describedby = "alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Gracias por su consulta"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Su información ha sido enviada y no será compartida con nadie. Le llegará una notificación al mail.
                </DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={ onClose }>Cerrar</Button>
                </DialogActions>
        </Dialog>
    )
}

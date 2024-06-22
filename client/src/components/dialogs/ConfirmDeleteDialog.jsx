import React from 'react'
import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from '@mui/material'

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this group?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        No
                    </Button>
                    <Button color="error" onClick={deleteHandler}>
                        Yes
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    )
}

export default ConfirmDeleteDialog

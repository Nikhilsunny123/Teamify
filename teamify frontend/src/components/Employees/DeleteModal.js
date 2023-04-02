import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteModal({ onDelete }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    onDelete();
    handleClose();
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#6956E5",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Employee?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

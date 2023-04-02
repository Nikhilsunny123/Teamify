import { useState } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

function MuiAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export default function Toastr({ message }) {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show toaster</button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

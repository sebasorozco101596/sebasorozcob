import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Snackbar } from '@mui/material';

function Notification(props) {

    const { notify, setNotify } = props;

    const handleClose = (event, reason) => {
      setNotify({
        ...notify,
        isOpen: false
      })
    }

  return (
    <Snackbar
        open = {notify.isOpen}
        autoHideDuration = {5}
        anchorOrigin = {{vertical: 'bottom', horizontal: 'center'}}>
        <Alert 
        severity= { notify.type} 
        onClose={handleClose}>
            {notify.message}
        </Alert>

    </Snackbar>
  )
}

export default Notification
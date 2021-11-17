import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import Swal from "sweetalert2";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function NewAnthemItemAlertDialog({ open, handleClose, collection }) {
  const { register, handleSubmit } = useForm();


  const onSubmit = (data) => {
    handleClose();
    uploadData(data.description);
  };

  

  const uploadData = (description) => {
    db.collection(collection)
      .doc()
      .set({
        description
      })
      .then(() => {
        showSuccesAlert();
      });
  };

  const showSuccesAlert = () => {
    Swal.fire(
      "Creado",
      "Se ha agregado a el himno con éxito",
      "success"
    ).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
                  <form onSubmit={handleSubmit(onSubmit)}>

          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Nuevo himno
          </DialogTitle>
          <DialogContent dividers>
           

            <Typography variant="h5" component="h5">
              Parrafo
            </Typography>
            <input
              {...register("description", { required: true })}
              className="input"
              required
            />

            
          </DialogContent>
          <DialogActions>
           
              <Button color="primary" type="submit" >
                Guardar
              </Button>
            
          </DialogActions>
          </form>

        </Dialog>
    </div>
  );
}

import React, { useState } from "react";
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
import { db, storage } from "../../../firebase";
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

export default function NewFounderItemAlertDialog({ open, handleClose, collection }) {
  const { register, handleSubmit } = useForm();

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    if (data.image[0]) {
        handleClose();
      uploadImage(data.title, data.description);
    }
  };

  const uploadImage = (title, description) => {
    const uploadTask = storage.ref(`${collection}/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(collection)
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            uploadData(title, description, url);
          });
      }
    );
  };

  const uploadData = (title, description, url) => {
    db.collection(collection)
      .doc()
      .set({
        description,
        title,
        image: url,
      })
      .then(() => {
        showSuccesAlert();
      });
  };

  const showSuccesAlert = () => {
    Swal.fire(
      "Creado",
      "Se ha agregado a la historia con ??xito",
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
            Nuevo art??culo
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="h5" component="h5">
              T??tulo
            </Typography>

            <input
              {...register("title", { required: true })}
              className="input"
              required
            />

            <Typography variant="h5" component="h5">
              Descripci??n
            </Typography>
            <input
              {...register("description", { required: true })}
              className="input"
              required
            />


            <Typography variant="h5" component="h5">
              Imagen
            </Typography>
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg" 
              required
              {...register("image", { required: true })}
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image != null && (
              <img
                src={URL.createObjectURL(image)}
                alt="profile"
                className="responsive-img"
              />
            )}
            
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

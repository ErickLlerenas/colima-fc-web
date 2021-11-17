import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import { db } from "../../../firebase";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function GalleryItem({image,handleClickOpen,collection,id}) {
  const classes = useStyles();

  const showDeleteAlert = ()=>{
    Swal.fire({
      title: '¿Eliminar foto?',
      text: "Estás a punto de eliminar esta foto",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        db.collection(collection).doc(id).delete().then(()=>{
          Swal.fire(
            'Eliminado',
            'Se ha eliminado la foto',
            'success'
          ).then(()=>{
            window.location.reload();
          })
        })
  
       
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
        />
       
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={showDeleteAlert}>
          Eliminar
        </Button>
        
      </CardActions>
    </Card>
  );
}
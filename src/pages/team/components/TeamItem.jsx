import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

export default function TeamItem({image,name,position,id}) {
  const classes = useStyles();

  const showDeleteAlert = ()=>{
    Swal.fire({
      title: '¿Eliminar jugador?',
      text: "Estás a punto de eliminar este jugador",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        db.collection('team').doc(id).delete().then(()=>{
          Swal.fire(
            'Eliminado',
            'Se ha eliminado el jugador',
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
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={showDeleteAlert}>
          Eliminar
        </Button>
        
      </CardActions>
    </Card>
  );
}
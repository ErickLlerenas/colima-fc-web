import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SizedBox from '../../../components/SizedBox';
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

export default function FounderItem({image,name,description,id,collection}) {
  const classes = useStyles();

  const showDeleteAlert = ()=>{
    Swal.fire({
      title: '¿Eliminar fundador?',
      text: "Estás a punto de eliminar este fundador",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        db.collection(collection).doc(id).delete().then(()=>{
          Swal.fire(
            'Eliminado',
            'Se ha eliminado el fundador',
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
          <Typography variant="body2" color="textSecondary" component="p" className="text">
          {description}
          </Typography>
          <SizedBox height={30}/>
        
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
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SizedBox from '../../../components/SizedBox';
import Swal from 'sweetalert2'
import { db } from "../../../firebase";


export default function AnthemItem({description,collection,id}) {

  const showDeleteAlert = ()=>{
    Swal.fire({
      title: '¿Eliminar himno?',
      text: "Estás a punto de eliminar este himno",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        db.collection(collection).doc(id).delete().then(()=>{
          Swal.fire(
            'Eliminado',
            'Se ha eliminado el himno',
            'success'
          ).then(()=>{
            window.location.reload();
          })
        })
  
       
      }
    })
  }

  return (
    <Card>
      <CardActionArea>
      
        <CardContent>
         
          <Typography variant="body2" color="textSecondary" component="p">
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
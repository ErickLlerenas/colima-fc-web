import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';



export default function ContactItem({title,description,icon,url,color}) {
 

  return (
    <Card style={{margin:20}}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor:color}}>
            {icon}
          </Avatar>
        }
    
        title={title}
        subheader={description}
      />
      
      
     
      
    </Card>
  );
}
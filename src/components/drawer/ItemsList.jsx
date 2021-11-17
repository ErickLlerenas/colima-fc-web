import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper , faAddressCard, faUsers, faShoppingBag, faChartLine, faPhotoVideo,faMailBulk,faInfoCircle} from '@fortawesome/free-solid-svg-icons'

export default function ItemList({ index }) {
  return (
    <div>

      <a href="/noticias" className="white link">
        <ListItem button className="listItem" style={index === 0 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faNewspaper} className="white" />

          </ListItemIcon>
          <ListItemText primary="Noticias" />
        </ListItem>
      </a>

      <a href="/inscripciones" className="white link">

      <ListItem button className="listItem" style={index === 1 ? { backgroundColor: '#2C5D00' } : {}}>
        <ListItemIcon>
        <FontAwesomeIcon icon={faAddressCard} className="white" />
        </ListItemIcon>
        <ListItemText primary="Inscripciones" />
      </ListItem>
      </a>

      <a href="/equipo" className="white link">

        <ListItem button className="listItem" style={index === 2 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faUsers} className="white" />
          </ListItemIcon>
          <ListItemText primary="Equipo" />
        </ListItem>
      </a>
      <a href="/equipo-femenil" className="white link">
        <ListItem button className="listItem" style={index === 3 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faUsers} className="white" />
          </ListItemIcon>
          <ListItemText primary="Equipo Femenil"/>
        </ListItem>
      </a>
      <a href="/tienda" className="white link">
        <ListItem button className="listItem" style={index === 4 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faShoppingBag} className="white" />
          </ListItemIcon>
          <ListItemText primary="Tienda" />
        </ListItem>
      </a>
      <a href="/estadisticas" className="white link">
        <ListItem button className="listItem" style={index === 5 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faChartLine} className="white" />
          </ListItemIcon>
          <ListItemText primary="Estadísticas" />
        </ListItem>
      </a>
      <a href="/galeria" className="white link">
        <ListItem button className="listItem" style={index === 6 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faPhotoVideo} className="white" />
          </ListItemIcon>
          <ListItemText primary="Galería" />
        </ListItem>
      </a>
      <a href="/contacto" className="white link">
        <ListItem button className="listItem" style={index === 7 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faMailBulk} className="white" />
          </ListItemIcon>
          <ListItemText primary="Contacto" />
        </ListItem>
      </a>
      <a href="/patrocinadores" className="white link">
        <ListItem button className="listItem" style={index === 8 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faUsers} className="white" />
          </ListItemIcon>
          <ListItemText primary="Patrocinadores" />
        </ListItem>
      </a>
      <a href="/historia" className="white link">
        <ListItem button className="listItem" style={index === 9 ? { backgroundColor: '#2C5D00' } : {}}>
          <ListItemIcon>
          <FontAwesomeIcon icon={faInfoCircle} className="white" />
          </ListItemIcon>
          <ListItemText primary="Historia" />
        </ListItem>
      </a>
    </div>
  );
}

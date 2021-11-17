import React ,{useState}from "react";
import { faShoppingBag,faAddressCard,faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MyDrawer from "../../components/drawer/MyDrawer";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//Screens
import Official from "./screens/Official";
import Friendly from "./screens/Friendly";
import Training from "./screens/Training";
import Events from "./screens/Events";

export default function Gallery() {
    const [selected, setSelected] = useState(0);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={6} />
      <main className="drawer-content">
      <BottomNavigation
      value={selected}
      onChange={(_, s) => {
        setSelected(s);
      }}
      showLabels
    >
      <BottomNavigationAction label="Oficial" icon={<FontAwesomeIcon icon={faShoppingBag} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Amistoso" icon={<FontAwesomeIcon icon={faAddressCard} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Entrenamiento" icon={<FontAwesomeIcon icon={faTicketAlt} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Eventos" icon={<FontAwesomeIcon icon={faTicketAlt} />} style={{color:'green'}}/>

    </BottomNavigation>

        <Container maxWidth="lg" className="container">
            {selected===0 ? <Official /> : selected ===1 ?  <Friendly />: selected ===2 ? <Training />  : <Events/>}
          
        </Container>
      </main>
    </div>
  );
}

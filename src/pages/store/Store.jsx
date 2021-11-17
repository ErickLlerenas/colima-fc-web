import React ,{useState}from "react";
import { faShoppingBag,faAddressCard,faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MyDrawer from "../../components/drawer/MyDrawer";
import Products from "./pages/Products";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Tickets from "./pages/Tickets";
import Credentials from "./pages/Credentials";

export default function Store() {
    const [selected, setSelected] = useState(0);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={4} />
      <main className="drawer-content">
      <BottomNavigation
      value={selected}
      onChange={(_, s) => {
        setSelected(s);
      }}
      showLabels
    >
      <BottomNavigationAction label="Productos" icon={<FontAwesomeIcon icon={faShoppingBag} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Credenciales" icon={<FontAwesomeIcon icon={faAddressCard} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Boletos" icon={<FontAwesomeIcon icon={faTicketAlt} />} style={{color:'green'}}/>
    </BottomNavigation>

        <Container maxWidth="lg" className="container">
            {selected===0 ? <Products /> : selected ===1 ?  <Credentials />: <Tickets />}
          
        </Container>
      </main>
    </div>
  );
}

import React ,{useState}from "react";
import { faUsers,faAlignCenter,faShieldAlt,faFutbol } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MyDrawer from "../../components/drawer/MyDrawer";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//Screens
import Founders from "./screens/Founders";
import Anthem from "./screens/Anthem";
import Shield from "./screens/Shield";
import Stadium from "./screens/Stadium";


export default function History() {
    const [selected, setSelected] = useState(0);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={9} />
      <main className="drawer-content">
      <BottomNavigation
      value={selected}
      onChange={(_, s) => {
        setSelected(s);
      }}
      showLabels
    >
      <BottomNavigationAction label="Fundadores" icon={<FontAwesomeIcon icon={faUsers} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Himno" icon={<FontAwesomeIcon icon={faAlignCenter} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Escucho" icon={<FontAwesomeIcon icon={faShieldAlt} />} style={{color:'green'}}/>
      <BottomNavigationAction label="Estadio" icon={<FontAwesomeIcon icon={faFutbol} />} style={{color:'green'}}/>

    </BottomNavigation>

        <Container maxWidth="lg" className="container">
            {selected===0 ? <Founders /> : selected ===1 ?  <Anthem />: selected ===2 ?  <Shield />: <Stadium/>}
          
        </Container>
      </main>
    </div>
  );
}

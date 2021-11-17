import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyDrawer from "../../components/drawer/MyDrawer";
import ContactItem from "./components/ContactItem";
import { faFacebook,  faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faMailBulk,faDesktop } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={7} />

      <main className="drawer-content">
        <Container maxWidth="lg" className="container">
       
          <h2>Contacto</h2>
         
            <Grid container spacing={3}>
              
                  <Grid item xs={12} md={12} lg={12}>
                    <ContactItem title="Twitter" description="Colima Futbol Club @fc_colima" icon={<FontAwesomeIcon icon={faTwitter} />} url={""} color="#1DCCFF"/>
                    <ContactItem title="Facebook" description="Fc_Colima" icon={<FontAwesomeIcon icon={faFacebook} />} url={""} color="#1BA4E8"/>
                    <ContactItem title="Instagram" description="fc_colima" icon={<FontAwesomeIcon icon={faInstagram} />} url={""} color="#FB3580"/>
                    <ContactItem title="Web" description="Colima Futbol Club" icon={<FontAwesomeIcon icon={faMailBulk} />} url={""} color="#9A9A9A"/>
                    <ContactItem title="Correo" description="administracion@colimafc.mx" icon={<FontAwesomeIcon icon={faDesktop} />} url={""} color="#FE933E"/>

                  </Grid>
                
             
            </Grid>
          
        
        </Container>
      </main>
    </div>
  );
}

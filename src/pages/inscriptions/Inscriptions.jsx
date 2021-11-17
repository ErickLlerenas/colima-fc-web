import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyDrawer from "../../components/drawer/MyDrawer";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditAlertDialog from "../../components/AlertDialog";

export default function Inscriptions() {
  const [isLoading, setIsLoading] = useState(true);
  const [inscriptions, setInscriptions] = useState([]);
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempInscriptions = [];

    db.collection("Inscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempInscriptions.push(doc.data());
          console.log(doc.data());
        });

        setInscriptions(tempInscriptions);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={1} />

      <main className="drawer-content">
        <Container maxWidth="lg" className="container">
       
          <h2>Inscripciones</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {inscriptions.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                  
                    <EditAlertDialog open={open} handleClose={handleClose} />
                  </Grid>
                );
              })}
            </Grid>
          )}
          <Fab color="primary" aria-label="add" className="fab">
            <AddIcon />
          </Fab>
        </Container>
      </main>
    </div>
  );
}

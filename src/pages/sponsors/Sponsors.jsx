import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyDrawer from "../../components/drawer/MyDrawer";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import SponsorsItem from "./components/SponsorsItem";
import AddIcon from "@material-ui/icons/Add";
import NewSponsorAlertDialog from "./components/NewSponsorItemAlert";

export default function Sponsors() {
  const [isLoading, setIsLoading] = useState(true);
  const [sponsors, setSponsors] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempSponsors = [];

    db.collection("sponsors")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          data.id = doc.id;
          tempSponsors.push(data);
        });

        setSponsors(tempSponsors);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={8} />

      <main className="drawer-content">
        <Container maxWidth="lg" className="container">
          
          <h2>Patrocinadores</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {sponsors.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <SponsorsItem
                      image={n.image}
                      name={n.name}
                      description={n.description}
                      id={n.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewSponsorAlertDialog open={open} handleClose={handleClose} />

        </Container>
      </main>
    </div>
  );
}

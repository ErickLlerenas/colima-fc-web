import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyDrawer from "../../components/drawer/MyDrawer";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import TeamItem from "./components/TeamItem";
import AddIcon from "@material-ui/icons/Add";
import NewTeamAlertDialog from "./components/NewTeamAlert";

export default function Team() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempTeam = [];

    db.collection("team")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          data.id = doc.id;
          tempTeam.push(data);
        });

        setTeam(tempTeam);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={2} />

      <main className="drawer-content">
        <Container maxWidth="lg" className="container">
          
          <h2>Equipo</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {team.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <TeamItem
                      image={n.image}
                      name={n.name}
                      position={n.position}
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
          <NewTeamAlertDialog open={open} handleClose={handleClose} />

        </Container>
      </main>
    </div>
  );
}

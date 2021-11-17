import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AnthemItem from '../components/AnthemItem';
import NewAnthemItemAlertDialog from "../components/NewAnthemItemAlert";

export default function Anthem() {
  const [isLoading, setIsLoading] = useState(true);
  const [anthem, setAnthem] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempAnthem = [];

    db.collection("anthem")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data =  doc.data();
          data.id = doc.id
          tempAnthem.push(data);
        });

        setAnthem(tempAnthem);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Himno</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {anthem.map((n, i) => {
                return (
                  <Grid item xs={12} md={12} lg={12} key={i}>
                    <AnthemItem
                      image={n.image}
                      title={n.title}
                      description={n.description}
                      id={n.id}
                      collection="anthem"
                    />
                  </Grid>
                );
              })}

            </Grid>

          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewAnthemItemAlertDialog open={open} handleClose={handleClose} collection="anthem"/>

        </Container>

  );
}

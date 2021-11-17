import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import GalleryItem from "../components/GalleryItem";
import AddIcon from "@material-ui/icons/Add";
import NewGalleryItemAlertDialog from "../components/NewGalleryItemAlert";

export default function Training() {
  const [isLoading, setIsLoading] = useState(true);
  const [Training, setTraining] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempTraining = [];

    db.collection("training")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data =  doc.data();
          data.id = doc.id;
          tempTraining.push(data);
        });

        setTraining(tempTraining);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Entrenamientos</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {Training.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <GalleryItem
                      image={n.url}
                      id={n.id}
                      collection="training"
                    />
                  </Grid>
                );
              })}

            </Grid>

          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewGalleryItemAlertDialog open={open} handleClose={handleClose} collection="training"/>

        </Container>

  );
}

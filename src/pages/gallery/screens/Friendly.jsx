import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import GalleryItem from "../components/GalleryItem";
import AddIcon from "@material-ui/icons/Add";
import NewGalleryItemAlertDialog from "../components/NewGalleryItemAlert";

export default function Friendly() {
  const [isLoading, setIsLoading] = useState(true);
  const [friendly, setFriendly] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempFriendly = [];

    db.collection("friendly_games")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          data.id = doc.id;
          tempFriendly.push(data);
        });

        setFriendly(tempFriendly);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Amistosos</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {friendly.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <GalleryItem
                      image={n.url}
                      id={n.id}
                      handleClickOpen={handleClickOpen}
                      collection="friendly_games"
                    />
                  </Grid>
                );
              })}

            </Grid>

          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewGalleryItemAlertDialog open={open} handleClose={handleClose} collection="friendly_games"/>

        </Container>

  );
}

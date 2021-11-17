import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import FounderItem from "../components/FounderItem";
import AddIcon from "@material-ui/icons/Add";
import NewFounderItemAlertDialog from "../components/NewFounderItemAlert";

export default function Founders() {
  const [isLoading, setIsLoading] = useState(true);
  const [founders, setFounders] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempFounders = [];

    db.collection("founders")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data =  doc.data();
          data.id = doc.id;
          tempFounders.push(data);
        });

        setFounders(tempFounders);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Fundadores</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {founders.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <FounderItem
                      image={n.image}
                      name={n.name}
                      description={n.description}
                      id={n.id}
                      collection="founders"
                    />
                  </Grid>
                );
              })}

            </Grid>

          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewFounderItemAlertDialog open={open} handleClose={handleClose} collection="founders"/>

        </Container>

  );
}

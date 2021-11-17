import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditAlertDialog from "../../../components/AlertDialog";

export default function Stadium() {
  const [isLoading, setIsLoading] = useState(true);
  const [Stadium, setStadium] = useState([]);
  const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempStadium = [];

    db.collection("stadium")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempStadium.push(doc.data());
        });

        setStadium(tempStadium);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Estadio</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {Stadium.map((n, i) => {
                return (
                  <Grid item xs={12} md={12} lg={12} key={i}>
                   
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

  );
}

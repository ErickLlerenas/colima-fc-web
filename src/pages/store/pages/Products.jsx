import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import StoreItem from "../components/StoreItem";
import AddIcon from "@material-ui/icons/Add";
import NewStoreItemAlertDialog from "../components/NewStoreItemAlert";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempProducts = [];

    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          data.id = doc.id;
          tempProducts.push(data);
        });

        setProducts(tempProducts);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" className="container">
          <h2>Productos</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {products.map((n, i) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <StoreItem
                      image={n.image}
                      title={n.title}
                      description={n.description}
                      price={n.price}
                      id={n.id}
                      collection="products"
                    />
                  </Grid>
                );
              })}

            </Grid>

          )}
          <Fab color="primary" aria-label="add" className="fab" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
          <NewStoreItemAlertDialog open={open} handleClose={handleClose} collection="products"/>

        </Container>

  );
}

import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyDrawer from "../../components/drawer/MyDrawer";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import NewsItem from "./components/NewsItem";
import AddIcon from "@material-ui/icons/Add";
import NewNewAlertDialog from "./components/NewNewAlert";

export default function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let tempNews = [];

    db.collection("news")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          data.id = doc.id;
          tempNews.push(data);
        });

        setNews(tempNews);
        setIsLoading(false);
      });
  }, []);
 
  return (
    <div className="flex">
      <CssBaseline />
      <MyDrawer index={0} />

      <main className="drawer-content">
        <Container maxWidth="lg" className="container">
         
          <h2>Noticias</h2>
          {isLoading ? (
            <CircularProgress color="secondary" className="loading" />
          ) : (
            <Grid container spacing={3}>
              {news.map((n, i) => {
                console.log(n)
                return (
                  <Grid item xs={12} md={6} lg={4} key={i}>
                    <NewsItem
                      image={n.image}
                      title={n.title}
                      description={n.description}
                      id={n.id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
          
          <Fab color="primary" aria-label="add" className="fab" onClick={()=>handleClickOpen(true)} >
            <AddIcon />
          </Fab>
          <NewNewAlertDialog open={open} handleClose={handleClose}/>
        </Container>
      </main>
    </div>
  );
}

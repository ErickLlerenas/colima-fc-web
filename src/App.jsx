import React, { useEffect } from "react";

// pages
import SignIn from "./pages/SignIn";
import News from "./pages/news/News";
import SignOut from "./pages/SignOut";
import PageNotFound from "./pages/PageNotFound";
import Inscriptions from "./pages/inscriptions/Inscriptions";
import Team from "./pages/team/Team";
import WomanTeam from "./pages/woman_team/WomanTeam";
import Store from "./pages/store/Store";
import Sponsors from "./pages/sponsors/Sponsors";

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./pages/gallery/Gallery";
import History from "./pages/history/History";
import Statistics from "./pages/statistics/Statistics";
import Contact from "./pages/contact/Contact";

function App() {
  useEffect(() => {
    if (checkIfLogedIn());
  }, []);

  const checkIfLogedIn = () => {
    const credentials = JSON.parse(
      localStorage.getItem("colima-fc-credentials")
    );
    if (credentials === null) {
      if (window.location.pathname !== "/" && window.location.pathname !== "/politica-de-privacidad") {
        window.location.href = "/";
      }
    } else {
      return true;
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/noticias">
          <News />
        </Route>
    
        <Route exact path="/inscripciones">
          <Inscriptions />
        </Route>
        <Route exact path="/equipo">
          <Team />
        </Route>  
        <Route exact path="/equipo-femenil">
          <WomanTeam />
        </Route>
        <Route exact path="/tienda">
          <Store />
        </Route>
        <Route exact path="/estadisticas">
          <Statistics />
        </Route>
        <Route exact path="/contacto">
          <Contact />
        </Route>
        <Route exact path="/galeria">
          <Gallery />
        </Route>
        <Route exact path="/patrocinadores">
          <Sponsors />
        </Route>
        <Route exact path="/historia">
          <History />
        </Route>
        <Route exact path="/salir">
          <SignOut />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

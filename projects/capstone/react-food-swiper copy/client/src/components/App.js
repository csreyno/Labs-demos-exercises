import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeature from "./pages/KeyFeature";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import "./App.css";
import Deck from "./swiper/Deck";

function App() {
  return (
    <div>
      <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={KeyFeature} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
      </div>
      <div><Deck /></div>
    </div>
  );
}

export default App;
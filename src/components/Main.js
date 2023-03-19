import React from "react";
import Home from "./Home";
import {
  aboutMePage,
  contactPage,
  homePage,
  starWarsPage,
} from "../utils/constants";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

const Main = () => {
  return (
    <Switch>
      <Route path={["/", `/${homePage}`]} exact component={Home} />
      <Route
        path={[`/${aboutMePage}`, `/${aboutMePage}/:hero`]}
        exact
        component={AboutMe}
      />
      <Route path={`/${starWarsPage}`} exact component={StarWars} />
      <Route path={`/${contactPage}`} exact component={Contact} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Main;

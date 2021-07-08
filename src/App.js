import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ProductRequirements,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  FileUpload,
  AboutPage,
  ProductsPage,
} from "./pages";

const App = () => {
  return (
    <div className=" font-roboto">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />

          <Route path="/profile" component={ProfilePage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" component={ProductRequirements} />
          {/* <Route path="/editprofile" component={EditPage} /> */}
          <Route path="/fileupload" component={FileUpload} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

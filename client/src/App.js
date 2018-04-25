import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Other from "./components/Other.js";
import axios from "axios";

class App extends Component {
  state = {
    loaded: false,
    authenticated: false
  };

  componentDidMount() {
    // check if user has already logged in successfully
    axios.get("/auth").then((res) => {
      this.setState({
        loaded: true,
        authenticated: res.data
      });
    });
  }

  setLogin = () => {
    // login component triggered authentication = true
    this.setState({
      authenticated: true
    });
  };

  render() {
    // prevent flickering of login component
    if (!this.state.loaded) {
      return null;
    }

    // redirect to login route if user not authenticated
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" render={(props) => <Login {...props} setLogin={this.setLogin} />} />

            {!this.state.authenticated ? <Redirect to="/login" /> : null }

            <Route exact path="/other" component={Other} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

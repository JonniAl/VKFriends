import React from 'react';
import '../App.css';
import Index from '../containers'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';

class App extends React.Component {
  render() {
    return(
        <Router>
          <React.Fragment>
             <Route exact path="/" render={(props) => (<Index {...props} cookies={this.props.cookies}/>)} />
          </React.Fragment>
        </Router>
    )}
}

export default withCookies(App);

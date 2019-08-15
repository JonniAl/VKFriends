import React from 'react';
import '../App.css';
import Index from '../containers'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withCookies } from 'react-cookie';

class App extends React.Component {
  render() {
    return(
        <Router>
          <div className="App">
             <Route exact path="/" render={(props) => (<Index {...props} cookies={this.props.cookies}/>)} />
          </div>
        </Router>
    )}
}

export default withCookies(App);

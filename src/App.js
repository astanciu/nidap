import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { typeAlias } from '@babel/types';
import {Route, Link} from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import Photos from './Photos';
import Writing from './Writing';
import Travel from './Travel';
import Projects from "./Projects";
import About from "./About";
import FactFlow from "./FactFlow";
import TropeTracker from "./TropeTracker";
import Internships from "./Internships";
import Resume from "./Resume";

const defaultProps = {
 style: { width: '10rem', height: '10rem' },
};
 
 
const App = ()  => {
 
 return (
   <div className="App">
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/projects/factflow" component={FactFlow} />
     <Route exact path="/projects/tropetracker" component={TropeTracker} />
     <Route exact path="/projects/internships" component={Internships} />
     <Route exact path="/Movies" component={Movies} />
     <Route exact path="/Photos" component={Photos} />
     <Route exact path="/Writing" component={Writing} />
     <Route exact path="/Travel" component={Travel} />
     <Route exact path="/Resume" component={Resume} />
     
   </div>
  
 );
};
 
export default App;

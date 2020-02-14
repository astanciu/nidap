import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { typeAlias } from '@babel/types';
import {Route, Link} from 'react-router-dom';

const defaultProps = {
  style: { width: '10rem', height: '10rem' },
};
const useStyles = makeStyles({
  paperMaster: {
    // padding: "2vw",
    textAlign: "center",
    color: "#000000",
    // background: "#A0DB9E",
    // border: "5px solid black",
  },
  paper0: {
    height:"100vh",
    width: "3vw",
    background: "#55769A",
  },
  paper1: {
    height:"100vh",
    width: "37vw",
    // background: "#55769A",
    // position: "-webkit-sticky", 
    // position: "sticky", 
    // top: "0"
  },
  paper2: {
    height:"100vh",
    width: "60vw",
  },
  paper3: {
    height:"40vh",
    width: "50vw",
    // background: "#55769A",
    border: "1px solid #55769A",
    flexDirection: "row",
    display: "flex",
    
  },
  paper4:{
    height:"65vh",
    width: "27vw",
    // background: "#55769A",
    paddingTop: "10vw", 
    marginLeft: "10vw",
    display: "sticky",
    textAlign: "left",
  },
  paper5:{
    // height:"65vh",
    width: "10vw",
    // height: "40vh",
    // background: "#55769A"
  },
  paper6:{
    // height:"65vh",
    width: "40vw",
    height: "40vh",
    // background: "#55769A"
  },
  button1: {
    display: "inline-block",
    color: "#49BEAA",
  },
  button2: {
    marginBottom: "2vw", 
    marginLeft: "5vw"
  },
  avatar1: {
    width: 100,
    height: 100,
    marginTop: "2vw"
  },
})

const Home = ()  => {
    const [data, setData] = useState({});
    const pictures = Object.values(data);
    const classes = useStyles();
  
  
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('./pictures/pictures.json');
        const json = await response.json();
        setData(json);
      };
      fetchProducts();
    }, []);
  
    return (
      <Grid container>
        <Paper elevation={0} square className={classes.paper0}></Paper>
        <Grid item>
          <Paper elevation={0} className={[classes.paper1, classes.paperMaster]}>
            <Paper elevation={0} className={classes.paper4} style={{position: "-webkit-sticky", position: "sticky", top: "0"}}>
              <Button className={classes.button1}>
                <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/">Home</Link>
              </Button>
              <Button className={classes.button1}>
                  <Link style={{color: "#49BEAA", textDecoration: "none"}} to="/about">About</Link>
              </Button>
              <Button className={classes.button1}>Resume</Button>
              <Avatar alt="Nida P" src="../Pictures/nidpic.JPG" className={classes.avatar1}/>
              <Typography variant="h3" style={{marginTop:"2vw", color:"#55769A"}}>Nida Pervez</Typography>
              <Typography variant="body1" style={{marginTop:"2vw", color: "#55769A"}}>DfakjdkfjDfakjdkfjDfakjd kfjDfakjdkfjDfakjdk fjDfakjdkfjDfak jdkfjDfakj dkfjDfakjdkf jDfakjdkfjDf akjdkfjDfakj dkfjDfakjdkf jDfakjdkfjD fakjdkfjDfakj dkfjDfakjdkfjD fakjdkfjD fakjdkfj Dfakjdkfj Dfakjd kfjDfakjd kfjDfakjdk fjDfakj dkfjDfakj dkfjDfakj dkfjDfakjd kfjDfakjdkfj</Typography>
            </Paper>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} className={[classes.paper2, classes.paperMaster]}>
            <Button className={classes.button2} style={{marginTop: "10vw"}}>
              <Paper elevation={0} className={classes.paper3}>
                <Paper elevation={0} className={classes.paper5}>
                  <Typography variant="h5" style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Trope Tracker</Typography>
                </Paper>  
                <Paper elevation={0} className={classes.paper6}>
                  <img src={"../Pictures/TropeTracker.png"} style={{height:"40vh", alignContent:"right"}}/>
                </Paper>
              </Paper>
            </Button>
            <Button className={classes.button2}>
              <Paper elevation={0} className={classes.paper3}>
                <Paper elevation={0} className={classes.paper5}>
                  <Typography variant="h5" style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Fact Flow</Typography>
                </Paper>  
                <Paper elevation={0} className={classes.paper6}>
                  <img src={"../Pictures/FactFlow.png"} style={{height:"40vh",  alignContent:"right"}}/>
                </Paper>
              </Paper>
            </Button>
            <Button className={classes.button2}>
              <Paper elevation={0} className={classes.paper3}>
                <Paper elevation={0} className={classes.paper5}>
                  <Typography  style={{textAlign: "left", margin:"1vw", color:"#EF767A"}}>Past Internships</Typography>
                </Paper>  
                <Paper elevation={0} className={classes.paper6}>
                  <img src={"../Pictures/Allstate.png"} style={{width:"20vh", alignContent:"right"}}/>
                  <img src={"../Pictures/Apple.png"} style={{width:"20vh", marginTop:"5vw", marginLeft:"5vw", alignContent:"right"}}/>
                </Paper>
              </Paper>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  };
  
  export default Home;
  
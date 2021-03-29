import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

// Styles
import { makeStyles } from '@material-ui/core/styles';
import './LandingPage.css'

// Images 
import GivtLogo from './givtlogo.png'
import GivtText from './givttext.png'
import Running from './running.png'

// Components
import TextField from '@material-ui/core/TextField'
import { Button, Typography } from '@material-ui/core';

// Redux
import {
  searchQuery
} from './LandingPageSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 10,
    // minHeight: 1080,
    // minWidth: 1920,
    //   width: 995,
    //   borderStyle: 'solid',
    //   outline: '5px dotted green',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchBar: {
    // marginRight: 200,
    // flexGrow: 1,
    // left: 256,
    // top: 357,
    // width: 1,
    display: 'flex',
    width: 1350,
    left: '15%',
  },
  title: {
    flexGrow: 1,
  },
}));

function CharityBox(props) {
  return (
    <div className={"box"}>
      <img className={"charlogo"} src={props.charlogo} />
      <div className={"char-title"}>
      <Typography variant="h5"> {props.name}</Typography>
      </div>
      <div className={"char-distance"}>
      <Typography variant="body1"> {props.distance}</Typography>
      </div>
      <div className={"char-distance"}>
      <Typography variant="caption"> 66 Commercial St, Spitalfields, London E1 6LT</Typography>
      </div>
      <div className={"char-distance"}>
      <Typography variant="caption"> Crisis is the UK national charity for homeless people. The charity offers year-round education, employment, housing and well-being services from centres in ...</Typography>
      </div>
    </div>
  )
}


export default function LandingPage() {
  const dispatch = useDispatch()
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    console.log(value)
    dispatch(searchQuery(value))
    history.push("/search-results");
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log('yes')
      handleSubmit()
    }
  }

  return (
    <div className={classes.root}>
      <div className={"logo"}>
        <img src={GivtLogo} />
      </div>
      <div className={"text"}>
        <img src={GivtText} />
      </div>
      <div className={"searchArea"}>
        <Typography variant="h3"> Find out what your local charity needs to combat homelessness</Typography>
        <TextField className={classes.searchBar}
          onChange={handleChange}
          id="outlined-search"
          label="Enter Postcode"
          value={value}
          type="search" variant="outlined" />
        {/* <Link to="/search-results" /> */}
        <Button className={"butty"} variant="contained" color="primary" onKeyDown={handleKeyDown} onClick={handleSubmit}> Submit</Button>
      </div>

     
      <div className={"footer"}>
      <div className={"boxes"}>
      <CharityBox 
        name="Crisis"
        distance="1.2 Miles"
        />
        <CharityBox 
        name="Shelter"
        distance="1.3 Miles"
        />
        <CharityBox 
        name="Emmaus Preston"
        distance="1.4 Miles"
        />
      </div>
        
        <div className={"running"}>
          <img src={Running} />
        </div>

      </div>
    </div>
  )
}

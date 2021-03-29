import React, { useState } from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles';
import './SearchResults.css'

// Components
import { TextField, Paper, Slider, Typography, Chip, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import CharityNeedCard from '../../components/CharityNeedCard/CharityNeedCard'
// import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        marginRight: 10,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    searchBar: {
 
    },
    title: {
        flexGrow: 1,
    },
}));


export default function SearchResults() {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            console.log('yes')
            //   handleSubmit()
        }
    }
    return (
        <div className={classes.root}>
            <div className={"left-panel"}>
            <TextField className={classes.searchBar}
                onChange={handleChange}
                id="outlined-search"
                label="Search field"
                value={value}
                type="search" variant="outlined" />
            <TextField />

                <img className={"map"} src="https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png" />
                <Paper className={"filter-paper"}>
                    <Typography id="discrete-slider" gutterBottom>
                        Distance
                     </Typography>
                    <Slider
                        defaultValue={30}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                    />
                    <Chip variant="outlined" color="primary" label="Toiletries" />
                    <Chip variant="outlined" color="primary" label="Clothing" />
                    <Chip variant="outlined" color="primary" label="Electrical Goods" />
                    <Chip variant="outlined" color="primary" label="Furniture" />
                    <Chip variant="outlined" color="primary" label="Hair" />
                    <Chip variant="outlined" color="primary" label="Food" />
                    <FormGroup row className={"checkboxes"}>
                        <FormControlLabel control={<Checkbox/>} label="1-5 days"/>
                        <FormControlLabel control={<Checkbox/>} label="5-7 days"/>
                        <FormControlLabel control={<Checkbox/>} label="10+ days"/>
                        </FormGroup>
                </Paper>
            </div>
            <div className={"right-panel"}>

         
            {/* Search results */}
            {/* <Paper elevation={3} > */}
            <CharityNeedCard />
            <CharityNeedCard />
            <CharityNeedCard />
            <CharityNeedCard />
            <CharityNeedCard />
            <CharityNeedCard />
           
                </div>
            {/* </Paper> */}
        </div>
    )
}

import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"

// Components
import Card from '@material-ui/core/Card'
import { Button, CardContent, Typography } from '@material-ui/core'
import Crisis from './crisis.jpg'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'flex',
        flexDirection: 'row',

    },
    card: {
        width: 616,
        // height: 150,
        margin: 20,
        display: 'flex',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    butPos: {
        // float: 'inline-end',
        height: 40,
        marginLeft: 280,
        marginTop: '7%',

    },
    profilePic: {
        width: 91,
        height: 91,
        position: 'absolute',
        top: 10,
        left: 10
    },
    piclogo: {
        width: 92,
        height: 92,
    }
});

export default function CharityNeedCard() {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        console.log('yay')
        history.push("/Needs");
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                {/* <Paper elevation={3} className={classes.profilePic}/> */}
                <div className={classes.piclogo}>
                    <img src={Crisis} alt="logo"/>
                </div>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Crisis UK
                    </Typography>  
                    <Typography className={classes.pos} color="textSecondary">
                        1.2 Miles Away
                    </Typography>
                </CardContent>
                <Button className={classes.butPos}color="primary" variant="contained" onClick={handleClick}> Select</Button>
            </Card>
        </div>
    )
}
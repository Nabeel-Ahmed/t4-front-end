import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom"

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // minHeight: 1080,
      // minWidth: 1920
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    loginButton: {
        // marginRight: 200,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Layout() {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
      history.push("/");
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button className={classes.loginButton} color="inherit">Login</Button>
                </Toolbar>
            </AppBar>  
        </div>
    )
}

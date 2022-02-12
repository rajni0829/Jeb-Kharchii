import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles"

export default function Header() {
    const classes = useStyles();
    return <div>
        <Typography className={classes.root} align="center" variant="h1">Jeb Kharchi</Typography>
        <Typography className={classes.root} align="center" variant="h6">Powered by Your Kharchi</Typography>
    </div>
}
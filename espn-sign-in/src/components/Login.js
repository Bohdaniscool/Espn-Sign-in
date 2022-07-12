//Login.js
import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, TextField, Button, Typography, Link, } from "@mui/material";
const Login=()=> {
    const paperStyle={
        padding: "30px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const btnstyle={
        margin:"10px 0",
        borderRadius:"100px"
    }
    const textfield2={
        margin:"20px"
    }
    return(
        
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <img src={require("/workspace/Espn-Sign-in/espn-sign-in/src/components/Images/ESPNGREYLOGO.png")} alt="name" width="100px"> </img> 
                <Grid align="center">

                </Grid>
                <Typography>‎‎‎‎‎‎‎‎‎‎</Typography>
        <TextField label="Username or email address" placeholder="Enter Username" fullWidth required></TextField>
        <Typography> ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎</Typography>
        <TextField label="Password (case sensitive)" placeholder="Enter Password" type="password" fullWidth required></TextField>
    
            <Button
                type="Submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                    Sign in
            </Button>
            <Typography style={textfield2}>
                    <Link href="#">
                        Need help logging in?
                    </Link>
            </Typography>
            <Typography style={btnstyle}>
                Facebook Login is no longer available. For help logging in please use the link above. 
            </Typography>
            <Button 
                type="Submit"
                color="primary"
                variant="outlined"
                style={btnstyle}
                fullWidth
                >
                    Sign up
            </Button>
        </Paper>
        </Grid>
    )
}
export default Login;
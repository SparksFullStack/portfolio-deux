import React, { Component, Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';
import './Landing.css';

const styles = {
    content: {
        display: 'flex',
        justifyContent: 'center',
    }
}

class Landing extends Component{
    render(){
        return(
            <Paper elevation={1} className='landing'>
                <div style={styles.content}>
                    <img alt='Charlie Sparks' className='coverImage' src='https://res.cloudinary.com/sparks-full-stack/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:ffffff,c_fill,g_auto,r_max/v1539896720/wedding_suit_copy_2.png' />
                </div>
                    <Typography align='center' variant='title'>Charlie Sparks</Typography>
                    <Typography align='center' variant='subtitle1'>Full-Stack Web Developer</Typography>
                    <Typography align='center' variant='subtitle2'>Los Angeles, California</Typography>
                
            </Paper>
        )
    }
}

export default Landing;
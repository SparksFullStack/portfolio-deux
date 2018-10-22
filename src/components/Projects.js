import React, { Component, Fragment } from 'react';
import { Typography, Paper } from '@material-ui/core';
import './Projects.css'

class Projects extends Component{
    render(){
        return(
            <div className='projects'>
                <Typography style={{marginTop: '30px'}} variant='h4' align='center'>Projects</Typography>
                <div className='projects__cards'>
                    <div className='projects__cards__card'>
                        <img className='projects__cards__image' src='https://res.cloudinary.com/sparks-full-stack/image/upload/v1539903340/auto%20review%20for%20you.png' />
                        <div className='projects__cards__card__info'>
                            <Typography variant='h5'>Auto Review for You</Typography>
                            <br />
                            <Typography variant='h6'>MERN stack app that allows users to create and browse car reviews.</Typography>
                            <p>Links:</p>
                            <a href='https://www.autoreviewforyou.com/'>https://www.autoreviewforyou.com/</a>
                            <br />
                            <a href='https://github.com/Lambda-School-Labs/CS10-car-reviews'>https://github.com/Lambda-School-Labs/CS10-car-reviews</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
import React from 'react';
import './Work.css';
import { Grid, Typography } from '@mui/material';
import Download from './Download';
import WorkPic from '../assets/pankaj.jpeg'

function Work() {
    const skills = ['Python', 'Java', 'C/C++', 'HTML/CSS3', 'JavaScript', 'TypeScript', 'ReactJs', 'Selenium',
        'Restful API', 'AWS', 'Docker', 'GitHub'
        // Add more skills here
    ];
    return (
        <section id="work" className="work">
            <div className="work-container">
                <div className="work-content">
                    <Typography variant="h4" className="work-heading">Education</Typography>
                    <div className="work-item">
                        <h3 className="work-subheading">Master's in Computer Science - San Diego State University</h3>
                        <p className="work-date">Aug'21-May'23</p>
                    </div>
                    <Typography variant="h4" className="work-heading">Work Experience</Typography>
                    <div className="work-item">
                        <h3 className="work-subheading">Software Developer</h3>
                        <p className="work-company">NBCUniversal</p>
                        <p className="work-date">Sep'22 - Dec'22</p>
                    </div>
                    <Typography variant="h4" className="work-heading">Skills</Typography>
                    <Grid container spacing={2} className="work-skills">
                        {skills.map((skill, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Typography variant="body1" className="work-skill">{skill}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h8" >Download my resume as PDF file.</Typography>
                    <Download />
                </div>
                <div className="work-image-container">
                    <img src={WorkPic} alt="Work pic" className="work-image" />
                </div>
            </div>
        </section>
    );
}

export default Work;
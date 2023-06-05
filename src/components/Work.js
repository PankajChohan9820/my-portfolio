import React from 'react';
import './Work.css';
import { Grid, Typography } from '@mui/material';
import Download from './Download';

function Work() {
    const skills = [
        'Python',
        'Java',
        'R',
        'HTML/CSS',
        'JavaScript',
        'React',
        // Add more skills here
    ];
    return (
        <section id="work" className="work">
            <div className="work-container">
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
            </div>
            <Typography variant="h8" >Download my resume as PDF file.</Typography>
            <Download/>
        </section>
    );
}

export default Work;
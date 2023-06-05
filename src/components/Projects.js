import React from 'react';
import './Project.css';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
function Project() {
    const dataArray = ['Handbag detection', 'Coronavirus tracker']
    return (
        <section id="projects" className="projects">
            <h2 className="projects-heading">My Projects</h2>
            <div>
                <Grid container spacing={4} justify="center" alignItems="center">
                    {dataArray.map((value, index) => (
                        <Grid item xs={12} sm={2} md={6}>
                            <ProjectCard key={index} headerName={value} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
}
export default Project;
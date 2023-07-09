import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {


    const dataArrayLeft = [{ name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] },
    { name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] },
    { name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] }]

    const dataArrayRight = [{ name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] },
    { name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] },
    { name: 'HandBag Scraping', githubLink: 'github.com', description: 'Demo', technologies: ['ReactJS', 'Flask'] }]

    return (
        <div className="m-12">
            <h1 className="text-2xl font-bold mb-8">Projects</h1>
            <div className="flex">
                <div className="w-1/2 pr-4">
                    {dataArrayLeft.map((value, index) => (
                            <ProjectCard key={index} data={value} />
                    ))}
                </div>
                <div className="w-1/2 pl-4">
                {dataArrayRight.map((value, index) => (
                            <ProjectCard key={index} data={value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;

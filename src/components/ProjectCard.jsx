import * as React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function ProjectCard(props) {
  const { data } = props;
  return (
    <div className="mb-4 p-2 hover:bg-gray-100 hover:border-1 hover:border-blue-300 rounded-lg">
      <div className="flex items-start">
        <div className="border-2 border-blue-500 h-12 w-12 flex items-center justify-center">
          <img src="project1.jpg" alt="Project 1" className="h-8" />
        </div>
        <div className="ml-4 text-left">
          <div className="font-bold flex">{data.name}
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="ml-2 items-center ">
              <HiArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="text-gray-700">{data.description}</div>
          {data.technologies.map((value, index) => (
            <div className="border-2 border-blue-500 rounded-full p-1 mr-1 mt-2 inline-block text-xs">
              ReactJS
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
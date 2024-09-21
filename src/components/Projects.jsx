
import React from "react";
import landingpg from '../assets/landingpg.png'
import actor from '../assets/actor.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Landing Page' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={landingpg} alt="" />
            </a>}
            {title=='Actor Page' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={actor} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Actor Page',
        description:'Actor page is a website about the actors which is done by basic of HTML , CSS and Bootstrap. This includes Event management website for EMC',
        image: {landingpg},
        git:'https://github.com/kapilnath546/HTML.git',
        technologies:['HTML' ,'CSS' , 'Bootstrap']
    },
    {
        title:'Landing Page',
        description:'Landing Page is basic website where it has details about a company and its introduction . It is also included with the services provided by the company. ',
        image: {actor},
        git:"https://github.com/kapilnath546/cod-soft.git",
        technologies:['HTML' ,'CSS' , 'Bootstrap']
    }
]

export default Projects
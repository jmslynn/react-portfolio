import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-lt-blue-shadow bg-dk-teal body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="text-center mb-20">   
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are a few of my current and past projects.
          </p>
        </div>
        <div className="flex flex-wrap -my-8">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex">
                <img
                  alt="gallery"
                  className="inset-0 object-contain object-center"
                  src={project.image}
                />
              </div>
              <div className="px-1 py-1 z-10 w-full border-4 border-gray-800 bg-gray-900">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  
                  <p className="leading-relaxed">{project.description}</p>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.skill1}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.skill2}</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.skill3}</span>
  </div>
                </div>
            </a>
            
          ))}
        </div>

</div>
    </section>

    
  );
}
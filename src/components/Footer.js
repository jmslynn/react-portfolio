import React from "react";

export default function Footer() {
 
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=lebanon+new+hampshire&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

        </div>
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                JENNIFER S. LYNN
              </h2>
              <p className="mt-1">
                Lebanon, NH<br />
                <a href="http://linkedin.com/in/jennifer-s-lynn/"  className="text-indigo-400 leading-relaxed">LinkedIn</a><br />
                <a href="http://github.com/jmslynn"  className="text-indigo-400 leading-relaxed">GitHub</a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <a href="mailto:jmslynn@lynnscorner.net" className="text-indigo-400 leading-relaxed">
                jmslynn@lynnscorner.net
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}
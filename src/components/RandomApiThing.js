import React, { useState, useEffect } from 'react';
// import { critterPath } from "../data";

export default function ApiDisplay() {
  const [images, setImages] = useState([]);
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setImages(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  
  return (
    <section id="apiDisplay">
      <div className="posts-container">
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            String of Text from an API
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
			That's it! Have a nice day. Here's a string of text:
		</p>
      {images.map((image) => {
         return (
      //       <p class="cat_image_container">
		// 	<img class="cat_image" src={image.url} alt="random cat from an API." />
		// </p>
      <div className="post-card" key={images.key}>
               <p className="post-title">{image.title}</p>
            </div>
         );
      })}

		
        </div>
      </div>
    </section>
  );
}
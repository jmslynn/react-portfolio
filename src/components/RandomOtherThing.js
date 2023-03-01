import React, { useState, useEffect } from 'react';

//   Ruralnet API Test: testing the location api for RuralNet
const queryID = "https://ipgeolocation.abstractapi.com/v1/?api_key=24b20bbcf9d1412e9deae17b60cd692a&ip_address=2600:4040:5714:3a00:d98d:8499:e47e:a240";

const queryIDNoIP = "https://ipgeolocation.abstractapi.com/v1/?api_key=24b20bbcf9d1412e9deae17b60cd692a";

export default function RandomThingDisplay() {
  const [locations, setLocation] = useState([]);
  useEffect(() => {
     fetch(queryIDNoIP)
.then((response) => response.json())
        .then((data) => {
           console.log(data);
           setLocation(data);
        })
        .catch((err) => {
           console.log(err.message);
           console.log("this is the fetch error message")
        });
  }, []);

  return (
    <section id="apiDisplay" className="text-lt-blue-shadow bg-dk-teal body-font">
      <div className="posts-container">
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Testing Location API for RuralNet
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
			Hi there! If you're seeing this, I'm testing something for some project.</p>          
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
 Today I'm troubleshooting some problems with the location API we're using in the RuralNet internet speed testing project. And for now it's all hidden in the console.
		</p>

      {/* {locations.map((location) => {
         return (
      <div className="post-card" key={locations.key}>
               <p className="post-title">{locations.city}</p>
            </div>
         );
      })} */}

		
        </div>
      </div>
    </section>
  );
}
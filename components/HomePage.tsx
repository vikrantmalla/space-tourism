import React from "react";
import { PageData } from "@/types/data";

const HomePage = ({ homes }: PageData.IndexPageData) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-32">
      <div className="text-center lg:text-left lg:p-4">
        {homes.map((about) => (
          <div key={about.id} className="home-page-content">
            <h2 className="text-white mb-3">{about.subheading}</h2>
            <h1 className="text-white uppercase">{about.heading}</h1>
            <p className="text-white mt-3">{about.description}</p>
          </div>
        ))}
      </div>
      <div id="col2">
        <a href="destination.html" className="explore-link">
          <div className="home-button rounded-full">
            <p className="text-center text-black">EXPLORE</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;

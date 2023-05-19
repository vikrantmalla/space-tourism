import { PageData } from "@/types/data";
import React from "react";

const Destination = ({ destinations }: PageData.DestinationPageData) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-32">
      <div className="text-center lg:text-left lg:p-4">
        {destinations.map((info) => (
          <div key={info.id} className="home-page-content">
            <h2 className="text-white mb-3">{info.subheading}</h2>
          </div>
        ))}
      </div>
        {destinations.map((info) => (
          <div key={info.id} className="flex flex-row justify-center items-center gap-8">
            {info.destinationData.destinations.map((destInfo) => (
                <h1 key={destInfo.distance} className="text-white">{destInfo.name}</h1>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Destination;

import { PageData } from "@/types/data";
import React, { useState } from "react";

const Destination = ({ destinations }: PageData.DestinationPageData) => {
  const [currentTab, setCurrentTab] = useState("Moon");
  const tabList = destinations
    .map((info) => {
      return info.destinationData.destinations.map((destInfo) => {
        return {
          label: destInfo.name,
          content: destInfo.description,
          distance: destInfo.distance,
          time: destInfo.travel
        };
      });
    })
    .flat();
  [
    {
      name: "Moon",
      label: "Simple Bookmarking",
      content: (
        <div className="tab-content">
          <div className="tab-info">
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Mars",
      label: "Speedy Searching",
      content: (
        <div className="tab-content">
          <div className="tab-info">
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Europa",
      label: "Easy Sharing",
      content: (
        <div className="tab-content">
          <div className="tab-info">
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "Titan",
      label: "Speedy Searching",
      content: (
        <div className="tab-content">
          <div className="tab-info">
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-32">
        <div className="text-center lg:text-left lg:p-4">
          {destinations.map((info) => (
            <div key={info.id} className="home-page-content">
              <h2 className="text-white mb-3">{info.subheading}</h2>
            </div>
          ))}
        </div>
        <div>
          {destinations.map((info) => (
            <div
              key={info.id}
              className="flex flex-row justify-between items-center gap-8 text-white"
            >
              {info.destinationData.destinations.map((destInfo, i) => (
                <label
                  key={i}
                  onClick={() => setCurrentTab(destInfo.name)}
                  className={destInfo.name === currentTab ? "active" : ""}
                >
                  {destInfo.name}
                </label>
              ))}
            </div>
          ))}
          <div className="tabs-container">
            {tabList.map((tab, i) => {
              if (tab.label === currentTab) {
                return (
                  <div key={i} className="text-white mt-5">
                    <h1 className="text-center text-3">{tab.label}</h1>
                    <p className="text-center mb-3">{tab.content}</p>
                    <hr/>
                    <div className="text-center mt-3">
                      <div>
                        <h3>AVG. DISTANCE</h3>
                        <h3>{tab.distance}</h3>
                      </div>
                      <div>
                        <h3>EST. TRAVEL TIME</h3>
                        <h3>{tab.time}</h3>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

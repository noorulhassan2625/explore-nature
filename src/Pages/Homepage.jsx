import React from "react";
import TopNavbar from "../Components/TopNavbar";
import Card from "../Components/Cards";

function Homepage({ data }) {
  return (
    <>
        <TopNavbar />
      <div className="container mx-auto px-8">
            <h2 className="text-[30px] my-5 text-center">Home Page</h2>
        <div className="cards-section grid grid-cols-3 gap-4">
          {data.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              imageUrl={item.images[0].url}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;

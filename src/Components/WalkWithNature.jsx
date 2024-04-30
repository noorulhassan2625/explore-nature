import React from "react";
import Card from "./Cards";
import TopNavbar from "./TopNavbar";

function WalkWithNature({ data }) {
  return (
    <div>
      <TopNavbar />
      <div class="container mx-auto px-8">
      <h1 className="text-center text-[50px]">{data.title}</h1>
      <div className="cards-section grid grid-cols-3 gap-4">
        {data.images.map((img, index) => (
          <Card
            key={index}
            title={img.type}
            imageUrl={img.url}
            description={data.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default WalkWithNature;

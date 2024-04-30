import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "../Pages/Homepage";
import StarsAndTrees from "../Components/StarsAndTrees";

import starImage1 from "../Assets/Images/StarImage1.jpg";
import starImage2 from "../Assets/Images/StarImage2.jpg";
import starImage3 from "../Assets/Images/StarImage3.png";
import treeImage1 from "../Assets/Images/TreeImage1.jpg";
import treeImage2 from "../Assets/Images/TreeImage2.jpg";
import treeImage3 from "../Assets/Images/TreeImage3.jpg";

import natureWalk1 from "../Assets/Images/NatureWalk1.jpg";
import natureWalk2 from "../Assets/Images/NatureWalk2.jpg";
import natureWalk3 from "../Assets/Images/NatureWalk3.jpg";
import natureWalk4 from "../Assets/Images/NatureWalk4.jpg";
import natureWalk5 from "../Assets/Images/NatureWalk5.jpg";
import natureWalk6 from "../Assets/Images/NatureWalk6.jpg";


import beautynature1 from "../Assets/Images/BeautyNature1.jpg";
import beautyNature2 from "../Assets/Images/BeautyNature2.jpg";
import beautyNature3 from "../Assets/Images/BeautyNature3.jpg";
import beautyNature4 from "../Assets/Images/BeautyNature4.jpg";
import beautyNature5 from "../Assets/Images/BeautyNature5.jpg";
import beautyNature6 from "../Assets/Images/BeautyNature6.jpg";


import WalkWithNature from "../Components/WalkWithNature";
import BeautyOfNatureSpeaks from "../Components/BeautyOfNatureSpeaks";

const imageData = [
  {
    title: "Stars and Trees",
    images: [
      { url: starImage1, type: "Star" },
      { url: starImage2, type: "Star" },
      { url: starImage3, type: "Star" },
      { url: treeImage1, type: "Tree" },
      { url: treeImage2, type: "Tree" },
      { url: treeImage3, type: "Tree" },
    ],
    description: "A collection of stars and trees.",
    link: "/stars-and-trees",
  },
  {
    title: "Walk with Nature",
    images: [
      { url: natureWalk6, type: "Trail" },
      { url: natureWalk5, type: "Trail" },
      { url: natureWalk4, type: "Trail" },
      { url: natureWalk3, type: "Forest" },
      { url: natureWalk2, type: "Forest" },
      { url: natureWalk1, type: "Forest" }
    ],
    description: "Walk through nature's paths.",
    link: "/walk-with-nature",
  },
  {
    title: "Beauty of Nature Speaks",
    images: [
      { url: beautynature1, type: "Scenery" },
      { url: beautyNature2, type: "Scenery" },
      { url: beautyNature3, type: "Scenery" },
      { url: beautyNature4, type: "Flowers" },
      { url: beautyNature5, type: "Flowers" },
      { url: beautyNature6, type: "Flowers" },
    ],
    description: "Nature's beauty expressed in silence.",
    link: "/beauty-of-nature-speaks",
  },
];

function Routes() {
  return (
    <Switch>
      {/* <Routes> */}
      <Route path="/" element={<Homepage data={imageData} />} />
      <Route
        path="/stars-and-trees"
        element={<StarsAndTrees data={imageData[0]} />}
      />
      <Route path="/walk-with-nature" element={<WalkWithNature data={imageData[1]} />} />
            <Route path="/beauty-of-nature-speaks" element={<BeautyOfNatureSpeaks data={imageData[2]} />} />
      {/* </Routes> */}
    </Switch>
  );
}

export default Routes;

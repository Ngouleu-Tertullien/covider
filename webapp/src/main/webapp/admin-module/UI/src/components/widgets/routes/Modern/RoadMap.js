<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RoadMapItem from "./RoadMapItem";
import {mediaList} from "./data"
import Widget from "components/Widget/index";

const RoadMap = () => {

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Widget styleName="jr-card-full">
      <Slider className="jr-slick-slider" {...settings}>
        {mediaList.map((media, index) =>
          <RoadMapItem key={index} data={media}/>
        )
        }
      </Slider>
    </Widget>
  );
}

export default RoadMap;
=======
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RoadMapItem from "./RoadMapItem";
import {mediaList} from "./data"
import Widget from "components/Widget/index";

const RoadMap = () => {

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    marginLeft: 10,
    marginRight: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Widget styleName="jr-card-full">
      <Slider className="jr-slick-slider" {...settings}>
        {mediaList.map((media, index) =>
          <RoadMapItem key={index} data={media}/>
        )
        }
      </Slider>
    </Widget>
  );
}

export default RoadMap;
<<<<<<< HEAD
>>>>>>> 4d2bbb9... backbone for the dashboard
=======
>>>>>>> 4d2bbb99f7304fe93e114a6909260496de0e6fc0
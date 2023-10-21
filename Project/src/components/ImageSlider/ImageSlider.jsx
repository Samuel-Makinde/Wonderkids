import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import children1 from "../../assets/Home Landing Image/children1.jpg"
import children3 from "../../assets/Home Landing Image/childrenCoding2.jpg"
import children2 from "../../assets/Home Landing Image/ai-learn-man.jpg"

import styles from "./ImageSlider.module.css"
// import textbook from "../../assets/Home Landing Image/textbook.jpg"




const ImageSlider = () => {
  //  const [showOnMobile480, setShowOnMobile480] = useState(false);
  // const [showOnTab, setShowOnTab] = useState(false);
  // const [showOnDeskTop, setShowOnDeskTop] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };



  return (
    <main className={styles.container}>
      <Slider {...settings}>
      
        <div className="w-[80px] h-full md:h-screen border-none font-euclid">
          <h1>Learn to code</h1>
        </div>

        <div className="w-[80px] h-full md:h-screen border-none">
          <h1>teach your chil coding</h1>
        </div>

        <div className=" w-[80px] md:h-screen h-full border-none">
          <p>We help team them coding</p>
      
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlider;

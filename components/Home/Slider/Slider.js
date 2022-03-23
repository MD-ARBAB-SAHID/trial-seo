import { Carousel } from "react-bootstrap";
import Styles from "./Slider.module.css";
import Image from "next/image"


const Slider = () => {
  return (
    <Carousel fade className={Styles["slider"]}>
      <Carousel.Item interval={3000}>
        <img className={`d-block w-100 ${Styles["img-h"]}`} src={"https://tekmentors.s3.ap-south-1.amazonaws.com/slider/cloud.jpg"} alt="First slide" />
        <h1 className={Styles["upperCarousel"]}>
          We deliver Digital and Technology consulting services to our clients
          that help them deliver digital products and services at a rapid pace
        </h1>
    
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img className={`d-block w-100 ${Styles["img-h"]}`} src={"https://tekmentors.s3.ap-south-1.amazonaws.com/slider/Data.jpg"} alt="Second slide" />
        <h1 className={Styles["upperCarousel"]}>
        We enable our clients to deliver their value proposition to their clients by creating a digitally empowered customer experience
        </h1>
       
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className={`d-block w-100 ${Styles["img-h"]}`} src={"https://tekmentors.s3.ap-south-1.amazonaws.com/slider/digital2.jpg"} alt="Third slide" />
        <h1 className={Styles["upperCarousel"]}>
        We partner with businesses to stitch the physical and digital experiences seamlessly thus enabling them digitally in the 4.0 economy
        </h1>
    
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className={`d-block w-100 ${Styles["img-h"]}`} src={"https://tekmentors.s3.ap-south-1.amazonaws.com/slider/Technology2.jpg"} alt="Fourth slide" />
        <h1 className={Styles["upperCarousel"]}>
        We specialize in helping organizations adopt tools, technologies, processes to solve their underlying business problems
        </h1>
      
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className={`d-block w-100 ${Styles["img-h"]}`} src={"https://tekmentors.s3.ap-south-1.amazonaws.com/slider/tech4.jpg"} alt="Fifth slide" />
        <h1 className={Styles["upperCarousel"]}>
        We enable teams and organizations succeed in the digitally disruptive world
        </h1>
       
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;

import Carousel from "./Carousel";
import img1 from "../../images/img001.jpg";
import img2 from "../../images/img002.jpg";
import img3 from "../../images/img003.jpg";

export default function ImageCarousel() {
  const slides = [img1, img2, img3];

  return (
    <div className="relative">
      <div className="max-w-full">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

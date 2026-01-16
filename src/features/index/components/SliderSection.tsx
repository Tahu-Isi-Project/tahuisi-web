import SliderImage from "@assets/img/tahu-horizontal.png";
import "../styles/horizontal_infinite_loop.css";

const Slider = () => {
  return (
    <div className="w-[99.4vw] h-[20vh] overflow-hidden relative">
      <img src={SliderImage.src} className="absolute tahu-isi-scroll-1" />
      <img src={SliderImage.src} className="absolute tahu-isi-scroll-2" />
    </div>
  );
};

export default Slider;

import SliderImage from '@assets/img/tahu-horizontal.png';
import "../styles/horizontal-infinite-loop.css";

const Slider = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <img
        src={SliderImage.src}
        className='absolute tahu-isi-scroll-1'
        alt=""
      />
      <img
        src={SliderImage.src}
        className='absolute tahu-isi-scroll-2'
        alt=""
      />
    </div>
  );
};

export default Slider;

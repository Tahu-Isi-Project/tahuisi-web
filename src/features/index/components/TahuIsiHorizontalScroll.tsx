import TahuIsiHorizontalImage from '@assets/img/tahu-horizontal.png';
import "../styles/horizontal-infinite-loop.css";

export default function TahuIsiHorizontalScroll() {
  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <img src={TahuIsiHorizontalImage.src} alt="" className='absolute tahu-isi-scroll-1' />
        <img src={TahuIsiHorizontalImage.src} alt="" className='absolute tahu-isi-scroll-2' />
      </div>
    </>
  );
}

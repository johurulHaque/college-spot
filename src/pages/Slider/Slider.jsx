import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-full h-96" src="./image/college4.jpg" />
        <div className="absolute top-10 md:top-40 left-10 md:left-48  text-xl md:text-4xl font-bold uppercase opacity-70 text-emerald-800">
          Navigating the Path to Success: <br /> The Importance of College Education
          <p>
            <Link to="/college">
              <button className="btn btn-accent btn-sm md:btn-md text-white mt-2 md:mt-4">
                Explore More.
              </button>
            </Link>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96" src="./image/college3.jpg" />
        <div className="absolute top-10 md:top-40 left-10 md:left-48  text-xl md:text-4xl font-bold uppercase opacity-70 text-emerald-800">
          Unlocking Doors to Opportunity: <br /> The Power of College Education
          <p>
            <Link to="/college">
              <button className="btn btn-accent btn-sm md:btn-md text-white mt-2 md:mt-4">
                Explore More.
              </button>
            </Link>
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="absolute top-10 md:top-40 left-10 md:left-48  text-xl md:text-4xl font-bold uppercase opacity-70 text-emerald-800">
        Building a Bright Future: <br /> The Role of College Education
          <p>
            <Link to="/college">
              <button className="btn btn-accent btn-sm md:btn-md text-white mt-2 md:mt-4">
                Explore More.
              </button>
            </Link>
          </p>
        </div>
        <img className="w-full h-96" src="./image/college2.jpg" />
      </SwiperSlide>

      {/* <SwiperSlide>
        <div className="absolute top-10 md:top-40 left-10 md:left-48  text-xl md:text-4xl font-bold uppercase opacity-70 text-cyan-600">
          Develop Skills, Build Character: <br /> Sports Academy for Youth
          <p>
            <Link to="/college">
              <button className="btn btn-accent btn-sm md:btn-md text-white mt-2 md:mt-4">
                Explore More.
              </button>
            </Link>
          </p>
        </div>
        <img className="w-full" src="./image/8.jpg" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;

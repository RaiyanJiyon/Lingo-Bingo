import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className="min-h-screen">
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide className="-mt-6">
                    <img className='w-full md:h-[500px] object-fill' src="https://i.ibb.co.com/WPt6fRm/slider-1.jpg" alt="Slider 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[500px] object-fill' src="https://i.ibb.co.com/W2wFHGm/slider-2.jpg" alt="Slider 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full md:h-[500px] object-fill' src="https://i.ibb.co.com/WGNtDcQ/slider-4.jpg" alt="Slider 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

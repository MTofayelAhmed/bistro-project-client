import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
   <section>
    <SectionTitle heading={'order-online'} subHeading={'from 11.00am to 10.00pm'}></SectionTitle>
    <Swiper
 
 slidesPerView={3}
 spaceBetween={30}
 freeMode={true}
 pagination={{
   clickable: true,
 }}
 modules={[FreeMode, Pagination]}
 className="mySwiper mb-16"
>
 <SwiperSlide>
   <img src={slide1} alt="" />
   <h3 className=" text-3xl uppercase text-white -mt-16 text-center "> Salads</h3>
 </SwiperSlide>
 <SwiperSlide>
   <img src={slide2} alt="" />
   <h3 className=" text-3xl uppercase text-white -mt-16 text-center ">Pizzas</h3>
 </SwiperSlide>
 <SwiperSlide>
   <img src={slide3} alt="" />
   <h3 className=" text-3xl uppercase text-white -mt-16 text-center ">Soups</h3>
 </SwiperSlide>
 <SwiperSlide>
   <img src={slide4} alt="" />
   <h3 className=" text-3xl uppercase text-white -mt-16 text-center "> Desserts</h3>
 </SwiperSlide>
 <SwiperSlide>
   <img src={slide5} alt="" />
   <h3 className=" text-3xl uppercase text-white -mt-16 text-center "> Salads</h3>
 </SwiperSlide>

 
</Swiper>
   </section>
  );
};

export default Category;
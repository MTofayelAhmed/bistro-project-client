import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  });

  return (
    <section className="mb-16">
      <SectionTitle
        heading="testimonials"
        subHeading="what our client say"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((comment) => (
          <SwiperSlide key={comment._id}>
            <div className="mx-20 px-20 flex flex-col items-center ">
              <Rating className="mx-auto mb-10" style={{ maxWidth: 180 }} value={comment.rating} readOnly />

              <p>{comment.details}</p>
              <h3 className=" text-orange-500 text-center text-2xl mt-3 ">
                {comment.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;

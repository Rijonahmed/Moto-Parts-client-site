import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import useReviews from '../Hooks/useReviews';

const ThreeReviews = () => {

  const [reviews] = useReviews();

  return (
    <div>

      <section className=' w-full mx-auto text-gray-700'>
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            // loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper max-w-7xl h-full"
          >
            {
              reviews.map((review, index) => {

                return (
                  <div key={index} className="">
                    <SwiperSlide className='text-center bg-white py-10 rounded-2xl px-5 space-y-2'>
                      <h3 className="text-sm md:text-xl font-bold">{review?.userName}</h3>
                      <img className="m-auto w-full rounded-full" src={review?.photoURL} alt="This is user Img" />
                      {

                        review?.rating === 1 &&
                        <div className="rating">
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" checked />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                        </div>

                      }
                      {

                        review?.rating === 2 &&
                        <div className="rating">
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" checked />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                        </div>

                      }
                      {

                        review?.rating === 3 &&
                        <div className="rating">
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" checked />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                        </div>

                      }
                      {

                        review?.rating === 4 &&
                        <div className="rating">
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" checked />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-gray-300" />
                        </div>

                      }
                      {

                        review?.rating === 5 &&
                        <div className="rating">
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" />
                          <input name="rating-1" className="mask mask-star w-4 md:w-6  bg-primary" checked />
                        </div>

                      }

                      <p className="text-xs break-words md:text-sm">{review?.userReviews.length > 100 ? `${review?.userReviews.slice(0, 100)}...` : review?.userReviews}</p>
                    </SwiperSlide>
                  </div>
                )
              })
            }

          </Swiper>
        </>
      </section>



    </div>
  );
};

export default ThreeReviews;
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";


const SliderBlogs = ({posts,lang}) => {

    return(
        <Swiper
        className="h-[350px]"
        
        slidesPerView={3}
        breakpoints={{
        560: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3.5,
        },
        }}
        >
                    {
                    posts.map((post, i) => (
                    <SwiperSlide className="relative overflow-hidden rounded-lg w-full h-[350px] mr-5" key={i}>
                        <img width={720} height={360} src={post.data.heroImage} alt=""  className="absolute inset-0 h-[350px] w-full object-cover"  />
                        
                        <div className="absolute bottom-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full flex items-end">
                            <div className="p-4 sm:p-6">        
                                <a href={`${lang === "en" ? "/en" : ""}/blog/${post.slug}/`}>
                                    <h3 className="mt-0.5 text-lg text-white">
                                        {post.data.title}
                                    </h3>
                                </a>
                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                    {post.data.description}
                                </p>
                                
                            </div>
                        </div>
                        </SwiperSlide>
                    ))
    }
        </Swiper>

    )
}


export default SliderBlogs;
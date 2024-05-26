import TitleSection from "../../../components/SectionTitle/TitleSection";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="my-12">
            <section>
                <TitleSection
                    subHeading='What Our Client Say?'
                    heading='TESTIMONIALS'
                ></TitleSection>
            </section>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="m-12 text-center">
                            {/**Copy from react demo and example*/}
                            <div className="w-40 mx-auto mb-8">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            </div>
                            <p>{review.details}</p>
                            <h1 className="text-orange-400 font-bold text-xl">{review.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;
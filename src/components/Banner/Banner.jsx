import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

const Banner = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('banners.json')
            .then(res => res.json())
            .then(info => setData(info));
    }, [])

    console.log(data);

    return (
        <div className='my-16'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                {
                    data.map((slide, idx) => (<SwiperSlide key={idx}>
                        <div className={'w-[90%] relative mx-auto h-[75vh] rounded-3xl flex justify-evenly items-center gap-[30%]'} >
                            {/* <h2>{slide.image}</h2> */}
                            {/* bg-[url("' + slide.image + '")] */}
                            <img className='absolute -z-10 rounded-3xl' src={slide.image} alt="slide 1" />
                            <div className='flex flex-col justify-center items-start p-6 rounded-3xl w-[40%] gap-6 text-start backdrop-blur-lg'>
                                <h2 className='font-exo text-white font-bold text-5xl'>{slide.estate_title}</h2>
                                <p className='font-roboto text-white font-normal text-lg'>{slide.description}</p>
                                <button className='btn btn-accent'>Learn More</button>
                            </div>
                            <div className='w-[20%] rounded-2xl flex flex-col justify-center items-center backdrop-blur'>
                                <h1 className='text-9xl font-exo text-white'>{slide.rating}</h1>
                                <ReactStars
                                    edit={true}
                                    count={5}
                                    value={slide.rating}
                                    size={40}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />,
                            </div>
                            <div className='absolute bottom-10 p-6 h-20 left-[44%] bg-white border-b-4 rounded-3xl border-orange-500'>
                                <h2 className='font-ubuntu font-medium'>Status: {slide.status}</h2>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};

export default Banner;

// firebase deploy is not working
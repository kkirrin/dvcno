'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';


import { SlideMain } from '../../components';
import { useState, useEffect } from 'react';

import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import getMainSliders from '../../utils/getMainSliders';

export default function Slider() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMainSliders();
            setData(result);
        };

        fetchData();

    }, []);

    return (
        <section
            className={`${styles.section__swiper} main_slider`}
        >
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                speed={1500}
            >

                {data && data.length > 0 ? (
                    data.map((item, index) => {
                        return (
                            // ПОДОГНАТЬ ВСЕ СЛАЙДЕРЫ ПОД ОДИН РАЗМЕР
                            <SwiperSlide key={index}>
                                <SlideMain item={item} />
                            </SwiperSlide>
                        )
                    })
                )
                    : (
                        <div>Loading...</div>
                    )
                }
            </Swiper>
        </section>
    );
};
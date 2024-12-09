"use client";
import React from 'react';
import styles from './style.module.css';

import bg from '../../../public/news/decor_news.png'
import Image from 'next/image';

import { useState, useEffect } from 'react';

import getNews from '../../utils/getNews';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsCard } from '../../components/News/NewsCard';

import { SwiperNavButtons } from '@/app/components/SwiperNavButtons/SwiperNavButtons';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export const News = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const news = await getNews();
            setData(news);
        };

        fetchData();

    }, []);

    return (
        <div className={styles.violet_bg}>
            <section className={styles.section}>
                <Image
                    src={bg}
                    alt="News Background"
                    objectFit="cover"
                    className={styles.news_dekor}
                />

                <div className={`${styles.wrapper} container`}>
                    <div className='relative'>

                        <h2 className={styles.title}>
                            новости
                        </h2>
          
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            modules={[Navigation]}
                            centeredSlides='true'
                            centeredSlidesBounds="true"
                            className={styles.swiper_news}
                            speed={1500}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                769: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {console.log(data)}
                            {data && data.length > 0 ? (
                                data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link
                                            href={`/pages/news/${item.title}`}
                                        >
                                            <NewsCard
                                                data={item}
                                                />
                                        </Link>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <p className="span-error-message">Данные отсутствуют.</p>
                        )}
                            <SwiperNavButtons />
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    )
}
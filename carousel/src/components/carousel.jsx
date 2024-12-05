import React, { useEffect, useState } from 'react';
import AliceCarousel, { Link } from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from "../config/api";
import axios from 'axios';



const Carousel = () => {
    const currency = 'USD';
    const [trending, setTrending] = useState([]);

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }

    useEffect(() => {
        fetchTrendingCoins();
    }, [])

    const responsive = {
        300: { items: 3 },
        400: { items: 4 },
        1024: { items: 6 },
    };

    const items = trending.map((coin) => {
        return (
            <Link >
                <div className="w-20 ">
                    <div className="w-18 h-20 flex justify-center items-center bg-neutral-100 rounded-full">
                        <img className="w-2/3" src={coin.image} alt={coin.name} />
                    </div>
                    <h1 className="text-center text-yellow-500 font-semibold">{coin.name}</h1>
                    <p className="text-center text-neutral-200">$ {coin.current_price}</p>
                </div>

            </Link>
        )
    })

    return (
        <>
            <div className='flex justify-center items-center w-full'>
                <div className='w-11/12 px-24'>
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlayInterval={2000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        autoPlay
                        items={items}

                    />
                </div>
            </div>
        </>

    );
};

export default Carousel;
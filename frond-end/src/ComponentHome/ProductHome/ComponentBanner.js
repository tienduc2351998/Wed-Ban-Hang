import React, { useEffect, useState } from 'react';
import '../../ComponentHome/ProductHome_CSS/ComponentBanner.css'
import banner1 from '../../../src/Asset/Image_Banner/banner1.jpg'
import banner2 from '../../../src/Asset/Image_Banner/banner2.jpg'
import banner3 from '../../../src/Asset/Image_Banner/banner3.png'
import logo1 from '../../Asset/Image_Banner/logo1.jpg'
import logo2 from '../../Asset/Image_Banner/logo2.png'

function ComponentBanner(props) {

    let banners = [banner1, banner2, banner3];
    let logo = [logo1, logo2];
    const [counter, setCounter] = useState(0);

    const changeBanners = () => {
        setCounter(prev => (prev + 1) % 3)
    }

    useEffect(() => {
        const timeChange = setInterval(() => { changeBanners() }, 1000);

        return () => {
            clearInterval(timeChange);
        }
    }, [])

    return (
        <div className='banner'>
            <img src={logo[0]} className='center' alt='no_image' />
            <img src={banners[counter]} className='center' alt='no_image' />
            <img src={logo[1]} className='center' alt='no_image' />
        </div>
    );
}

export default ComponentBanner;
"use client"
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { StaticImageData } from 'next/image';
import { useState, useEffect, useRef } from 'react';
import CustomButton from '../Button';


interface Slide {
    image: StaticImageData;
    text: string;
}

const LandingSlide = () => {
    const [ images, setImages ] = useState<Slide[]>( [] );
    const autoplay = useRef( Autoplay( { delay: 6000 } ) );
    


    useEffect(() => {
        const loadImages = async () => {
            const image1 = await import('../../assets/oil-and-gas-1.avif');
            const image2 = await import('../../assets/oil-and-gas-2.avif');
            const image3 = await import('../../assets/oil-and-gas-3.avif');

            setImages([
                {
                    image: image1.default,
                    text: 'No. 1 construction and engineering company',
                },
                {
                    image: image2.default,
                    text: 'No. 1 construction and engineering company',
                },
                {
                    image: image3.default,
                    text: 'No. 1 construction and engineering company',
                },
            ]);
        };

        loadImages();
    }, []);

    return (
        <div>
             <Carousel withIndicators loop plugins={[autoplay.current]} withControls={false} className='custom-carousel-indicators '>
            {images.map((slide, index) => (
                <Carousel.Slide key={index}>
                    <div
                        className="relative h-[70vh] bg-cover bg-center "
                        style={{ backgroundImage: `url(${slide.image.src})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50" />
                        <div className="absolute inset-0 pt-[25vh] md:pt-[20vh] w-11/12 mx-auto text-white">
                            <p className='uppercase font-bold tracking-widest text-sm'>We are 3dhitech</p>
                            <p className="capitalize text-3xl md:text-6xl w-10/12 md:w-6/12">{ slide.text }</p>
                            <div className='pt-6'>
                                <CustomButton>Learn more</CustomButton>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
            ))}
        </Carousel>
   </div>
    );
};

export default LandingSlide;

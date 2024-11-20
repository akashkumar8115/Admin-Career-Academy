import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { partnerData } from '../../data/partner';
import partner from '../../assets/partner.jpg'

const OurPartner = () => {

    const imageData = [
        { id: 1, src: 'https://picsum.photos/400/300?random=1', alt: 'Client 1', link: '/client1' },
        { id: 2, src: 'https://picsum.photos/400/300?random=2', alt: 'Client 2', link: '/client2' },
        { id: 3, src: 'https://picsum.photos/400/300?random=3', alt: 'Client 3', link: '/client3' },
        { id: 4, src: 'https://picsum.photos/400/300?random=4', alt: 'Client 4', link: '/client4' },
        { id: 5, src: 'https://picsum.photos/400/300?random=5', alt: 'Client 5', link: '/client5' },
        { id: 6, src: 'https://picsum.photos/400/300?random=6', alt: 'Client 6', link: '/client6' },
        { id: 7, src: 'https://picsum.photos/400/300?random=7', alt: 'Client 7', link: '/client7' },
        { id: 8, src: 'https://picsum.photos/400/300?random=8', alt: 'Client 8', link: '/client8' },
        { id: 9, src: 'https://picsum.photos/400/300?random=9', alt: 'Client 9', link: '/client9' },
    ];

    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
          
        ],
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="mt-24 py-12 ">
            <div className='lg:w-10/12 w-11/12 mx-auto flex flex-col gap-y-16 '>

                <div className=" flex xmd:flex-row flex-col items-center gap-8 justify-between ">
                    <div data-aos="fade-right" className="xmd:w-[55%]">
                        <h2 className="xlg:text-5xl md:text-4xl text-3xl font-bold text-green-500 xmd:text-left text-center mb-4">Our Partners</h2>
                        <h3 className="mb-4 text-xl font-semibold text-black-900 xmd:text-left text-center">
                            We believe in the power of collaboration.
                        </h3>
                        <p className="text-black-900 text-justify">
                            Our partnerships are founded on trust, shared expertise, and a common goal of success. At the heart of our growth is a strong network of partners who bring diverse perspectives and strengths. Together, we achieve excellence and deliver services that make a difference for our clients and communities.
                        </p>
                    </div>

                    <div data-aos="fade-left" className="flex justify-center xmd:w-[40%] w-[80%]">
                        <img
                            src={partner}
                            alt="Our Partner"
                            className="object-cover h-full w-full  "
                        />
                    </div>
                </div>

                <div className="relative py-8 ">
                    <h1 data-aos="fade-left" className='xmd:text-4xl text-3xl font-semibold text-center mb-16'>Our Trusted Partners</h1>
                    <button
                        className="absolute xl:top-64 xmd:top-56 smd:top-48 xs:top-60 top-[200px] left-5 z-10 -translate-y-1/2 text-white  bg-green-500 hover:text-white-100 p-2 shadow-lg hover:bg-violet-50  transition-transform duration-300 transform rounded-full hover:scale-110 hover:shadow-lg hover:shadow-gray-600 xmd:text-2xl text-base "
                        onClick={prevSlide}
                    >
                        <FaArrowLeft  />
                    </button>
                    <button
                        className="absolute xl:top-64 xmd:top-56 smd:top-48 xs:top-60 top-[200px] right-5 z-10 -translate-y-1/2 bg-green-500 text-white bg-white-100  p-2 shadow-lg hover:bg-violet-50 transition-transform duration-300 transform rounded-full hover:scale-110 hover:shadow-lg xmd:text-2xl text-base "
                        onClick={nextSlide}
                    >
                        <FaArrowRight  />
                    </button>

                    <Slider {...settings} ref={sliderRef} className="">
                        {partnerData.map((partner) => (
                            <div data-aos="fade-down" key={partner.id} className="px-6  w-[200px] h-[200px] ">
                          
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-contain aspect-square transition-transform duration-500 transform  "
                                        style={{
                                            animation: 'fadeIn 1s ease-in-out',
                                        }}
                                    />
                            
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>


            {/* Keyframes directly in JSX */}
            {/* <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}</style> */}
        </section>
    )
}

export default OurPartner
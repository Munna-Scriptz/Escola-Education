import React, { useRef } from 'react'
import CommonHead from '../common/CommonHead'
import ClientsSingleCard from '../common/ClientsSingleCard'
import pfp1 from '../../assets/images/pfp1.png'
import pfp2 from '../../assets/images/pfp1.png'
import pfp3 from '../../assets/images/pfp2.png'
import pfp4 from '../../assets/images/pfp3.png'
import pfp5 from '../../assets/images/pfp4.png'
import pfp6 from '../../assets/images/pfp5.png'
import Slider from 'react-slick'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md'

const ClientsReview = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    };
    const ReviewData = [
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp4,
            username: 'Albert Flores',
            role: 'Developer'
        },
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp2,
            username: 'Albert Flores',
            role: 'Developer'
        },
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp5,
            username: 'Albert Flores',
            role: 'Developer'
        },
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp3,
            username: 'Albert Flores',
            role: 'Developer'
        },
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp1,
            username: 'Albert Flores',
            role: 'Developer'
        },
        {
            message: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat. Faucibus cursus maecenas lorem.',
            image: pfp6,
            username: 'Albert Flores',
            role: 'Developer'
        },
    ]
  return (
    <>
        <section id='Review-About' className='lg:py-[120px] py-[80px] overflow-hidden'>
            <div className="container">
                <div id="Review-Row">
                    {/* ------------------Header-------------------- */}
                    <div className='flex lg:flex-row flex-col lg:items-center justify-between'>
                        <div className='lg:w-[414px] w-full'>
                            <CommonHead topText={'Clients review'} BottomText={'Expert Guidance for Your Journey'}/>
                        </div>
                        <div className='items-center gap-2 flex lg:mt-0 mt-8'>
                            <div onClick={() => document.querySelector(".slick-prev")?.click()} className="w-[60px] h-[60px] bg-[#2f55ef2d] hover:bg-txtBrand hover:text-white duration-[.3s] flex items-center justify-center text-txtBrand rounded-[5px] cursor-pointer">
                                <MdKeyboardDoubleArrowLeft size={25} />
                            </div>
                            <div onClick={() => document.querySelector(".slick-next")?.click()} className="w-[60px] h-[60px] bg-[#2f55ef2d] hover:bg-txtBrand hover:text-white duration-[.3s] flex items-center justify-center text-txtBrand rounded-[5px] cursor-pointer">
                                <MdKeyboardDoubleArrowRight size={25} />
                            </div>
                        </div>
                    </div>
                    {/* ------------------Slider-------------------- */}
                    <div className='mt-[60px]'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {
                                    ReviewData.map((item , e)=>(
                                        <ClientsSingleCard img={item.image} text={item.message} name={item.username} role={item.role}/>

                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ClientsReview
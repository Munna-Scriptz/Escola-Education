import React from 'react'
import brand1 from '../../assets/images/brand1.svg'
import brand2 from '../../assets/images/brand2.svg'
import brand3 from '../../assets/images/brand3.svg'
import brand4 from '../../assets/images/brand4.svg'
import brand5 from '../../assets/images/brand5.svg'
const Brands = () => {
  return (
    <>
        <section id='Brands' className='mt-[120px]'>
            <div className="container">
                <div id="BrandsRow" className='flex flex-wrap gap-y-5 items-center justify-around'>
                    <img src={brand1} alt="Brands" />
                    <img src={brand2} alt="Brands" />
                    <img src={brand3} alt="Brands" />
                    <img src={brand4} alt="Brands" />
                    <img src={brand5} alt="Brands" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands
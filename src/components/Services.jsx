import React from 'react'
import CommonHead from './common/CommonHead'

const Services = () => {
  return (
    <>
        <section id='Services' className='mt-[120px]'>
            <div className="container">
                {/* -------------Header----------------- */}
                <div className='w-[434px]'>
                    <CommonHead topText={'Services we’re offering'} BottomText={'Navigating your path to success'}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services
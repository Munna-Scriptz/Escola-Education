import React from 'react'
import CommonHead from '../common/CommonHead'
import ClientsSingleCard from '../common/ClientsSingleCard'

const ClientsReview = () => {
  return (
    <>
        <section id='Review-About' className='mt-[120px]'>
            <div className="container">
                <div id="Review-Row">
                    {/* ------------------Header-------------------- */}
                    <div>
                        <CommonHead topText={'Clients review'} BottomText={'Expert Guidance for Your Journey'}/>
                    </div>
                    {/* ------------------Slider-------------------- */}
                    <div className='mt-[60px]'>
                        <ClientsSingleCard/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ClientsReview
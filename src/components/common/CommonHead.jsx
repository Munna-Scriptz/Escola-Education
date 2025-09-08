import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <div>
        <p className='text-txtBrand font-inter font-bold text-[18px]'>{topText}</p>
        <h2 className='font-inter font-bold text-[42px] leading-[54px] text-secondBK mt-[15px]'>{BottomText}</h2>
    </div>
  )
}

export default CommonHead
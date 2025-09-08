import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <div>
        <p className='text-txtBrand font-inter font-bold lg:text-[18px] text-[16px]'>{topText}</p>
        <h2 className='font-inter font-bold lg:text-[42px] text-[28px] lg:leading-[54px] text-secondBK lg:mt-[15px] mt-[10px]'>{BottomText}</h2>
    </div>
  )
}

export default CommonHead
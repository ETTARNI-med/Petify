import React from 'react'

interface Props{
    name:string
    logo: React.ReactNode
}

export default function CategoryCard(props:Props) {
const {name,logo} = props
  return (
    <div className='bg-transparent w-[200px] h-[200px] flex flex-col items-center text-center justify-evenly border-secondcolor border-2 rounded-lg hover:bg-secondcolor duration-150 ease-linear cursor-pointer hover:text-secondary'>
      {logo}
      <p className='font-Poppins text-lg md:text-lg lg:text-xl 2xl:text-2xl'>{name}</p>
    </div>
  )
}

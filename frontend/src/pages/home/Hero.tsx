import { FC } from 'react'

const Hero:FC = () => {
  return (
    <div className='hero bg-center bg-cover h-[20vh] md:h-[30vh] grid place-items-center rounded-3xl p-5' >
      <h1 className='text-center text-xl md:text-3xl lg:text-4xl font-bold mb-5 text-white'>Tripster ile konaklama rezervasyonu yap</h1>
      <p className='md:text-lg lg:text-xl text-white'> Dünya çapında 1,340,076 oda seni bekliyor!</p>
    </div>
  )
}

export default Hero 
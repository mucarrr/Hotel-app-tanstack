import { FC } from 'react'
import { Link } from 'react-router-dom'
import { usePlaces } from '../../utils/service'


const Header:FC = () => {
    const {data} = usePlaces()
  return (
    <header className='border-b border-zinc-300'>
        <div className='container flex justify-between'>
            <div className='flex gap-10 align-items-center'>
                <h1 className='font-bold text-xl md:text-2xl'>Tripster</h1>
                <nav className='flex gap-5 items-center'>
                    <Link to="/">Oteller ({data?.length})</Link>
                    <Link to="/" className='max-md:hidden'>Populer</Link>
                    <Link to="/create">Olustur</Link>
                </nav>
            </div>
            <div className='flex gap-2 items-center'>
                <button className='border border-blue-500 rounded-full py-1 px-5 max-md:hidden'>Kaydol</button>
                <button className='bg-blue-500 rounded-full py-1 px-5 text-white'>Giriş Yap</button>
            </div>
        </div>
    </header>
  )
}

export default Header
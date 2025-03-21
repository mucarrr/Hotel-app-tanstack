import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

interface ContainerProps {
    children: React.ReactNode
}
const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div className='container'>
        <div className='flex'>
        <Link to="/" className='border border-zinc-200 p-2 rounded-md transition-all duration-300 hover:bg-zinc-100'>
        <FaArrowLeft/>
        </Link>
        </div>
        {children}
    </div>
  )
}

export default Container
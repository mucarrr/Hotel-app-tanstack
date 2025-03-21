import { FC } from 'react'
import { MdEventAvailable } from 'react-icons/md'
import { CgUnavailable } from 'react-icons/cg'

interface Props {
  availability: boolean;
  expand?: boolean;
}

const Status: FC<Props> = ({ availability, expand = false }) => {
  return (
    <div className={`flex items-center gap-4 border border-zinc-200 p-2 rounded-md ${availability ? 'bg-green-200' : 'bg-red-200'}`}>
        {availability ? <MdEventAvailable className='text-xl text-green-600' /> : <CgUnavailable className='text-xl text-red-600' />}
        {expand && <span >{availability ? 'Mevcut' : 'Dolu'}</span>}
    </div>
  )
}

export default Status
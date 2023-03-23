import React from 'react'

const Filtermovie = ({filtered,setfiltered}) => {
  return (
    <div className='flex justify-around mt-5'>
        <button className='bg-slate-600 rounded text-white px-6 py-1'>All</button>
        <button className='bg-slate-600 rounded text-white px-6 py-1'>Action</button>
        <button className='bg-slate-600 rounded text-white px-6 py-1'>Comedy</button>
    </div>
  )
}

export default Filtermovie
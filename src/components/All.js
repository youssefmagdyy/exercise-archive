import React from 'react'
import Exercise from './Exercise'

const All = () => {
  return (
    <main className='all'>
        <input placeholder='\\search by tags ' type='text'>
        </input>
        <div className='list'>
            <Exercise/>
            <Exercise/>
            <Exercise/>
            <Exercise/>
        </div>
    </main>
  )
}

export default All
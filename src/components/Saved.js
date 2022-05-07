import React from 'react'
import SavedExercise from './SavedExercise'

const Saved = () => {
  return (
    <main className='saved'>
        <h1>
            Username's Saved
        </h1>
        <div className='list'>
            <SavedExercise/>
            <SavedExercise/>
            <SavedExercise/>
            <SavedExercise/>
        </div>
    </main>
  )
}

export default Saved
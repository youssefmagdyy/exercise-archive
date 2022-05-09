import React from 'react'
import Exercise from './Exercise'
import {useLocation, useNavigate, useParams} from 'react-router-dom';

const Exercises = () => {
  let navigate = useNavigate();
  let params = useParams();
  let pagenumber = parseInt(params.pagenumber)
  let location = useLocation();
  return (
    <main className='exercises'>
        <input placeholder='search by tags ' type='text'>
        </input>
        <div className='list'>
            {/* <Exercise width={'277'} height={'491'}/>
            <Exercise width={'277'} height={'491'}/> */}
        </div>
        <div className={`${(location.pathname === '/exercises/1')? 'page-turn-one':'page-turn'}`}>
          {(pagenumber !== 1)&&<button className='page-btn' type='button' onClick={()=>{navigate(`/exercises/${pagenumber-1}`)}}>Prev page</button>}
          <button className='page-btn' type='button' onClick={()=>{navigate(`/exercises/${pagenumber+1}`)}}>Next page</button>
        </div>
    </main>
  )
}

export default Exercises
import React from 'react'
import Exercise from './Exercise'
import {useLocation, useNavigate, useParams} from 'react-router-dom'

const Saved = () => {
  let navigate = useNavigate();
  let params = useParams();
  let pagenumber = parseInt(params.pagenumber)
  let location = useLocation();
  return (
    <main className='saved'>
        <h1 style={{marginTop:'5vh',fontSize:'1.8rem'}}>
            Username's Saved
        </h1>
        <div className='list'>
        <Exercise width={'207'} height={'368'}/>
        <Exercise width={'207'} height={'368'}/>
        </div>
        <div className={`${(location.pathname === '/saved/1')? 'page-turn-one':'page-turn'}`}>
          {(pagenumber !== 1)&&<button className='page-btn' type='button' onClick={()=>{navigate(`/saved/${pagenumber-1}`)}}>Prev page</button>}
          <button className='page-btn' type='button' onClick={()=>{navigate(`/saved/${pagenumber+1}`)}}>Next page</button>
        </div>
    </main>
  )
}

export default Saved
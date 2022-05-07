import React from 'react'


const Exercise = () => {
  return (
    <article className='item'>
      <button className='button'>
            Unsave or Save
        </button>
      <iframe width="277" height="491" src="" title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
      </iframe>
     <div className='item-text'>
       <h1>Exercise Name</h1>
       <h3>By Author</h3>
       <div className='tags'>
       <span>tag2</span><span>tag2</span><span>tag2</span> <span>tag3</span>
       </div>
     </div>
    </article>
  )
}

export default Exercise
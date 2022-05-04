import React from 'react'


const Exercise = () => {
  return (
    <article className='item'>
      <iframe width="277" height="491" src="https://www.youtube.com/embed/vxcZS_ysr1I" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
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
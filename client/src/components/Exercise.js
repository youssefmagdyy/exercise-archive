import React from 'react'


const Exercise = ({width,height,link,name,author,tags}) => {
  return (
    <article className='item'>
      <button className='button'>
            Unsave or Save
        </button>
      <iframe width={width} height={height} src={link} title={name}
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
      </iframe>
     <div className='item-text'>
       <h1>{name}</h1>
       <h3>{author}</h3>
       <div className='tags'>
         {tags.map((t,index)=>{
           return <span key={index}>{t}</span>
           })}
       </div>
     </div>
    </article>
  )
}

export default Exercise
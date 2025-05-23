import React from 'react'

export const GifItem = ({title,images,id}) => {
    console.log({title,images,id});
  return (
    //className en reat se utiliza esto reemplazaria al class que se usa en el html
    <div className='card'>
        <img src={images} alt={title} />
        <p>{title}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const Gifgrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);
  console.log({isLoading})

  return (
    <>
    <h3>{category}</h3>
    {/*<LoadingMessage isLoading={isLoading}/>*/}
    {
      isLoading && (    <h2>Cargando...</h2>      )
      
    }
    <div className='card-grid'>
        {images.map((image)=>(
          <GifItem 
          key={image.id}
          {...image}
          />
          
        ))
      }
    </div>
    </>
  )
}


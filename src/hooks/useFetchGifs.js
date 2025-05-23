import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

//funcional component para jsx
//hook es una funcion que regresa algo
export const useFetchGifs = (category) => {
  
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async() =>{
      const newImages =await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }  
    //useEffect
    useEffect(()=>{
    //llamamos ala peticion
    getImages();
    },[])
    return {
        images:images,
        isLoading:isLoading
    }
}

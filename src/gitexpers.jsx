import { useState } from "react"
import { AddCategory, Gifgrid } from "./components";

export const GitExperApp =()=>{
    //Hooks para mantener el html o sneper
    const [categories, setCategories] = useState(["One Punch Man"]);
  

        //agregar una nueva categoria
        const onCategory= (newCategory)=>{
            if(categories.includes(newCategory)) return;    //si existe el mismo termina esta funcion
            setCategories([newCategory,...categories]);
        }
    return(
        //Fragmento         
        <>  
        {/* Titulo */}
        <h1>Git Expert App </h1>
        {/* Input */}
                    {/* es una propiedad = setCategory  y el setCategory de la derecha es una funcion o el hook que esta arriba*/}
        < AddCategory onNewCategory ={(event)=>onCategory(event)}/>
           
        {/* Listado de Gif*/}
        <button onClick={onCategory}>Agregar</button>
        <ol>
            {/*Transformar el arreglo  y siempre necesita un key*/}
            {/*Ahora se utiliza azi*/}
            {categories.map(category=>(

                <Gifgrid  
                key={category}
                category={category}
                />
            
            ))
            }
        </ol>
            {/* Git Item */}
        </>
        
    )
}
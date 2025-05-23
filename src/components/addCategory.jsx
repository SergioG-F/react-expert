import { useState } from "react";
                            //aqui obtenemos el properties que viene de gitexpress
export const AddCategory =({onNewCategory})=>{

    const [inputValue, setInputValue] = useState("");   //por defecto lo ponemos vacio
    const onInputChange = (e)=>{
            //console.log(e.target.value);
            setInputValue(e.target.value); 
    }
    const onSubmit = (event)=>{
        event.preventDefault(); //esto es para que no se recarge la pagina
       // console.log(inputValue);
        if(inputValue.trim().length <=1) return;
        //viene en el callback
        //setCategory(cateogy=>[inputValue,...cateogy]);
        setInputValue('');    //lo pones en vacio
        onNewCategory(inputValue.trim());
        

    }   

    return (
        <>
        <div>AddCategory</div>
        <form onSubmit={onSubmit} action="">
        <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={onInputChange}
        />
        </form>
        
        </>
        
    )
}

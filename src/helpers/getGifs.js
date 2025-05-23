export const getGifs= async (category)=>{
    const paramt1="?api_key=";    
    const paramt2="&q=";
    const paramt3="&limit=10";
    const key="y08J4nz9mCMGndDkeDLWO1mJBh5uWkdY";
    const httpApi="https://api.giphy.com/v1/gifs/search";
    const value1 =`${category}` ;
    //const value = "One Piece";
    const url=httpApi+paramt1+key+paramt2+value1+paramt3;
    const resp = await fetch(url);  // ese Response {...} que ves en el navegador es la respuesta HTTP
   // const data = await resp.json(); // Convertimos el response en JSON
    const {data} = await resp.json(); // Convertimos el response en JSON y la constante data lo desestructuramos
    //console.log(value1);
    const gifs =data.map(img=>({
      id:img.id,
      title:img.title,
      images:img.images.downsized_medium.url,
    }))
    return gifs;
    //"api.giphy.com/v1/gifs/search?api_key=y08J4nz9mCMGndDkeDLWO1mJBh5uWkdY&q=One Piece"
  }
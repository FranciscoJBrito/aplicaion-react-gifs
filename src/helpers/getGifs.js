export const getGifs = async( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=c4Vym44lU4efaJHVI8Mt6xTa4LPkAJvG`;
    const respuesta = await fetch( url );
    const {data} = await respuesta.json();


    const gifs = data.map( img  =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    })

   return gifs;
}

//export default getGifs;
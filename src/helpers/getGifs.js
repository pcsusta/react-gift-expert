export const getGifs = async( category ) => { // se crea una función de tipo async para hacer una petición
  const url = `https://api.giphy.com/v1/gifs/search?api_key=z0aJxB9x3SGg0xdNZQhVi0vXok2aHNGz&q=${ category }&limit=10`;
  const resp = await fetch( url ); // la petición va aqui usando el await fetch
  const { data } = await resp.json(); // data es una de las los valores que había dentro de la respuesta del "resp"

  const gifs = data.map( img => ({ // esto es una forma corta en la que no ponemos un "return{}"
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  return gifs;
};

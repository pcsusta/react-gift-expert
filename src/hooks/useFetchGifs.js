import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un "hook" no es mas que una función que regresa algo. En este caso regresa el contenido de  "image" y "isLoading"
export const useFetchGifs = ( category ) => {

  // Para quitar el renderizado doble que hace innecesariamente, primero hay que quitar en el "main.jsx" los tags de "<React.StrictMode>" (solo se usa el React.StrictMode en Desarrollo, NO en producción) y despues usar el "useEffect"
  // "useEffect" primero tiene una función y segundo tiene un arreglo de dependencias. si se deja el arrego vacio asi: [] significa que el contenido de la función del "useEffect" SOLO SE EJECUTARÁ LA PRIMERA VEZ
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true )

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages( newImages );
    setIsLoading(false);
  }

  useEffect( () => { // NOTA: No se puede usar promesas (async) dentro de un "useEffect" directamente
    // Forma 1, con un .then anidado
    // getGifs( category )
    //   .then( newImages => setImages( newImages ) );

    // Forma 2, usando la promesa async afuera
    getImages();
  }, [])
  
  return {
    images, /* esto es una abreviación de: " images: images " ya que en ecmascript 6 se puede pues tienen el mismo nombre la propiedad y el valor recibido */
    isLoading
  }

}

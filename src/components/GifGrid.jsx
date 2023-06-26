import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // no es recomendable poner la funciónes aqui dentro porque se vuelve a ejecutar cada vez que se vuelve a renderizar el componente

  // Esto es un "custom hook". En todos los hooks se suele llamar primero escribiendo "use" seguido del nombre que tendrá
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      {
        // Forma 1 para hacer un "if" Operador ternario
        //isLoading ? ( <h2>Cargando...</h2> ) : null 

        // Forma 2. Con un "if corto" asi: valor_a_evaluar && (x cosa)
        // El "if corto" funciona asi: 1. Primero es el valor a evaluar (si es true o false). 2. La acción a hacer si es "FALSE" (se pone un && sino habrá nada). 3. La acción a hacer si es "TRUE".
        isLoading && ( <h2>Cargando...</h2> )
      }
      
      {/* NOTA: En un .jsx no se puede usar la propiedad "class" en un html porque es una palabra reservada. Se usa ' className="x-clase-css" ' para agregar una clase CSS */}
      <div className="card-grid"> 
        {
          images.map( ( image ) => ( // se desestructura para en vez de tener "images.map( image => ( ... ) ", se hace de la otra forma
            <GifItem 
            key={ image.id }
            { ...image } /* Este codigo es el operador spread que se encarga de expandir el "image" de sus propiedades que contienen, en este caso contene las variables title, url y id. Sería como hacer esto: title={ image.title } url={ image.url } id={ image.id } */
            />
          ))
        }
        
      </div>   
    </>
  )
}

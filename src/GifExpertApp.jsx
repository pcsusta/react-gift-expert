import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // Esto sería como hacer "./components/index.js", pero al dejarlo vacío, javascript sabe que tiene que buscar un archivo llamado "index.js"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']); // Aqui se está diciendo que la variable "categories" se inicializará como un array con 2 elementos

  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes(newCategory) ) return;

    // categories.push('Mikami'); // Esto NO FUNCIONARÍA EN REACT. Reaact intenta no mutar objetos, por lo que el "push" no funciona en react para los arrays
    // setCategories( [ 'Texto ejemplo' ] ); // Este sencillo ejemplo lo que haría es remplazar el contenido de "categories", por el valor de "Texto ejemplo" en el array
    
    // setCategories( [ ...categories, 'Mikami' ] ); // Forma 1. Para poder agregar mas elementos al array de "categories", primero se necesitaría crear una copia de él por medio del operador "spread" y al lado poner el NUEVO elemento a agregar
    // setCategories( cat => [...cat, 'Mikami'] );     // Forma 2. Esta sería otra forma de agregar un nuevo elemento a "categories", mas parecido a lo que ya habiamos visto antes, donde por medio de una función de flecha, se crea un valor temporal "cat" y dentro se manipula para agregar el elemento nuevo
    setCategories( [ newCategory, ...categories] ); // Para nuestro caso, necesitamos que primero se agrege el nuevo elemento y los anteriores elementos queden despues. "newCategory" contiene el valor escrito en el input el cual se recibe del componente "<AddCategory />"
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ value => onAddCategory(value) }
      />
     
      { 
        categories.map( category => (
          <GifGrid key={ category } category={ category } /> // la "key" se pone en el componente, no en el "<>" está dentro del componente y engloba su contenido y se manda su propiedad "category"
        ))
      }
        
    </>
  )
}

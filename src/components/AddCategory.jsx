import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => { // Aqui se desestructura el "event" para que abajo en vez de "event.target.value", directo se use el "target"
    setInputValue( target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();

    if( inputValue.trim().length <= 1 ){ return }; // Esto permitirá evaluar que el contenido del input sea mayor a 1 caracter, Si es menor, regresará un "return" que no hará nada y asi no se ejecutará la sig linea de codigo donde agregamos el contenido del input al array

    // setCategories( (categories) => [ inputValue, ...categories ] ); // En este caso, para poder traer aun las "categories" que contiene el "setCategories", primero se usaría un "callback" (categories) para despues poder utilizarlas, sino se perderían los valores que traia el "categories"
    onNewCategory( inputValue.trim() );
    setInputValue(''); // Aqui hacemos que al ejecutar el submit, al final se limpie en input
  };

  return (
    <form onSubmit={ onSubmit }>
      <input 
      type="text"
      placeholder="Buscar gifs"
      value={ inputValue }
      onChange={ onInputChange } // Aqui se está solo poniendo la referencia "onInputChange" en vez de todo el codigo largo que sería " (event) => onInputChange(event) "
    />
    </form>
  )
}

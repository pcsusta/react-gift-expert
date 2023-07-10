import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 
  
  test('Debe de cambiar el valor de la caja de texto', () => { 
    
    render( <AddCategory onNewCategory={ ()=> {} } /> ); // Se le pasa una función simple solo para que nos deje continuar haciendo pruebas.
    
    const input = screen.getByRole('textbox'); // el "getByRole('textbox')" sería lo que buscaría el input en el componente, NO SE PONE "getByRole('input')", eso no existe
    
    // Se usa "input" pues el "evento" que quiero disparar es el como el haber empezado a ingresar valores en el input.
    // El input en el componente "AddCategory.jsx" por medio del "onInputChange" recibe un target que contiene "value" el cual es lo que debemos de pasar en el "fireEvent.input()", todo es para que al final el <input /> tenga el un "value" (eso lo podemos comprobar con la linea de screen.debug() )
    fireEvent.input( input, { target: { value: 'Goku' } }); 
    
    expect( input.value ).toBe('Goku');
    // screen.debug();

  });

  test('debe de llamar onNewCategory si el input tiene un valor', () => { 
  
    const inputValue    = "Goku";
    const onNewCategory = jest.fn(); // Esta es una simulación de una función con jest, en este caso de la función usada en el verdadero componente

    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form'); // Este buscaría un "<form>..", sin embargo aunque esté no lo encontrará a menos que el form tenga un "aria-label", por ejemplo: <form aria-label="form">

    fireEvent.input( input, { target: { value: inputValue } }); 
    fireEvent.submit( form ); // Se simula el submit del formulario.
    // screen.debug();

    expect( input.value ).toBe(''); // En este caso, al haber simulado el submit, en la función "onSubmit" del archivo AddCategory.jsx, al final debería estar vació el value, y es lo que se hace en esta lina de código, el comprobar si está vacio

    expect( onNewCategory ).toHaveBeenCalled(); // Ésto evalúa si la función onNewCategory fue llamada (ejecutada)
    expect( onNewCategory ).toHaveBeenCalledTimes(1); // Ésto evalúa si la función fué ejecutada 1 sola vez (se puede escribir x numero)
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Ésto evalúa si fue llamado con x valor, en este caso con el valor del inputValue

  });

  test('No debe de llamar el onNewCategory si el input está vació', () => {

    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory } /> );

    const form  = screen.getByRole('form'); 

    fireEvent.submit( form ); 
    // screen.debug();

    expect( onNewCategory ).not.toHaveBeenCalled();

  });

});
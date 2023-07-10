import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem.jsx />', () => { 

  const title = 'Madokami';
  const url   = 'http://madokami.co.js/madoka.jpg';

  test('Debe de hacer match con el Snapshot', () => {

    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();

  });

  test('should debe de mostrar la imagen con el URL y el AT indicado', () => { 
  
    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();

    // Esta es una forma pero se repite mucho codigo, en este caso se repite mucho el "screen.getByRole"
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );

    // En esta forma se utiliza una sola vez el "screen.getByRole" para usar un poco de menos codigo y es mas util por ejemplo en el caso de querer evaluar muchas mas propiedades.
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('debe de mostrar el titulo en el componente', () => { 
    
    render( <GifItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy(); // En este caso el toBeTruthy evalúa que el texto del "title" exista en el componente evaluado. NO TOMA EN CUENTA las propiedades/atributos de los elementos. Por ejemplo, en la imagen está en "title" como atributo alt="" pero este no cuenta como un texto, sino como un atributo por lo que fallaría la prueba, pero como el "title" está en un <p></p> entonces la prueba pasa pues SÍ existe como texto

  });

});
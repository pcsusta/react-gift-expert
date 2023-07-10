import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'New York';

  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({ // En este caso, se está simulando el resultado del "useFetchGifs" con el "mockReturnValue". El hook "useFetchGifs" lo que hace es regresar un objeto con las propiedades "images" y "isLoading" (ver el archivo useFetchGifs.js), por lo que en los paréntesis pondría esos 2 valores para simular ese resultado de la ejecución del "useFetchGifs"
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category } /> );
    // screen.debug();

    expect( screen.getByText('Cargando...') ); // Probar que el texto "Cargando..." existe en el componente
    expect( screen.getByText( category ) ); // Probar que el texto de la categoría existe en el componente

  });

  test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

    const gifs = [
      {
        id: 'Edificio',
        title: 'New York',
        url: 'https:newyork.com/city.jpg'
      },
      {
        id: 'Edificios varios',
        title: 'NYC',
        url: 'https:nyc.com/image2.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({ // En este caso, como es una simulación de cuando ya tenemos las imagenes (y ya se ejecutó el "useFetchGifs"), el "isLoading" estaría el false y el "images" sería un array con al menos 1 objeto. ESO sería lo que simulariamos
      images: gifs,
      isLoading: false
    });
    
    render( <GifGrid category={ category } /> );
    // screen.debug();
    
    expect( screen.getAllByRole('img').length).toBe(2); // En este caso probamos que existan 2 codigos de imagenes <img /> en el resultado html

  });

});
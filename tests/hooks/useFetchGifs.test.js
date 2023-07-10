import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial', () => {
    // Aqui evaluamos el "estado inicia", es decir, el como inicia el hook de "useFetchGifs". En este caso, en el estado inicial el "isLoading" está en true y el valor "images" es un array vacío

    // el "renderHook" entre sus parentesis se pueden usar el "result" (es el resultado una vez que el hook ya se monta), "unmount" (es el resultado cuando el hook es desmontado) o "rerender" (para cuando se quiera re-renderizar el hook)
    const { result } = renderHook( () => useFetchGifs('Dragon Ball') ); // El "renderHook" lamaría en este caso el "useFetchGifs"
    // console.log(result);
    const { images, isLoading } = result.current;
    
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();

  });

  test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => {

    const { result } = renderHook( () => useFetchGifs('Dragon Ball') ); // El "renderHook" llamaría en este caso el "useFetchGifs"

    // el "waitFor" fue importado arriba del testing-library
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0) // El waitFor se esperaría hasta que el array de "images" sea mayor a cero. Se le puede poner un tiempo maximo para que espere usando (despues del "..terThan(0)") una coma, seguido de un timeout y la cantidad de segundos, asi: ,{ timeout: x }. Por defecto el tiempo a espera es de 1 segundo
    );

    const { images, isLoading } = result.current;
    
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

  });

});
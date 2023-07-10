import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs(', () => { 
  
  test('Debe de retornar un arreglo de gifs', async() => { // se usa una funcion de tipo async pues se hará una petición http o promesa
    
    const gifs = await getGifs('Dragon Ball');
    // console.log(gifs);
    expect( gifs.length ).toBeGreaterThan(0); // Usando el "toBeGreaterThan" compruebo que la variable trae contenido y es un arreglo de más de "cero" elementos.
    
    // El problema de la evaluación anterior es que no comprueba si el resultado es un arreglo con objetos que contengan las propiedades que debe traer cada uno.
    // usando el "toEqual" comprobamos que el primer elemento del arreglo "gif" sea un objeto y que además contiene los elementos "id", "title" y "url" y que estos a su vez tengan cualquier contenido, en este caso un "String" el cual no sabemos que contenido traera, por eso se usa el "expect.any( String )", para esperar "any" (cualquier) string
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    });

  });

});
/* Esto se le llama archivo indice o archivo de barril.
Aqui haría la exportación de los componentes/archivos necesarios y que se encuentran en esta carpeta "components"
y de esta forma ya no tendría que importarlos a cada uno de manera individual en donde se necesite.

Es decir en vez de importarlos asi:
import { AddCategory } from "./components/AddCategory"; 
import { GifGrid } from "./components/GifGrid"; 

Gracias a éste archivo index.js, ahora podría resumirlos asi:
import { AddCategory, GifGrid } from "./components"; 
*/

export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';
# practica9_253239

¿qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?
Ninguna pq no toque ni el Service ni el Controller de Clases lo unico que cambie fue una linea en el Module donde le dije que usara el nuevo repo en vez del viejo

¿por qué el Service de Inscripciones no tuvo que cambiar nada de sus reglas?
Porque esas reglas viven en el Service y pues el Service nunca habla directo con la base de datos

¿por qué una interfaz no puede validar nada en tiempo de ejecución?
Porque una interfaz solo existe mientras escribo el codigo y en cuanto se convierte a JavaScript desaparece por completo por eso tuve que cambiarla a una clase que si sigue 
existiendo cuando el programa corre

¿qué código responde y qué trae el cuerpo cuando algo no pasa la validación?
Responde 400 y el cuerpo trae una lista con cada cosa que salio mal

¿cuántas líneas quedó más corto el controlador?
Quedo mas corto pq quite todo el bloque de try/catch que revisaba uno por uno los 4 errores posibles

si la respuesta llega en los dos casos, ¿quién bloquea y a quién protege?
El servidor respondio igual en ambos casos pq es el navegador el que los bloquea no mi api y es el Cors el que protege al usuario y evita que una pagina de otro sitio pueda 
leer los datos de mi api

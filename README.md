## Mi lista de tareas

Seguimos con el repaso de JavaScript. ¡A darle caña!

### 0. Preparando

Para empezar vamos a aprender cómo usar realizar los ejercicios en vuestro equipo local. Para ello debes clonar (hacer una copia) de este repositorio en tu equipo desde el terminal de comandos.

`git clone https://github.com/Adalab/lista-de-tareas.git`

¡Ya tienes todo el código en tu equipo! Ahora ábrelo en tu editor favorito, en tu navegador y estamos listos para empezar a trabajar.

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos pedido los datos de tareas a un servidor y nos ha devuelto la información un objeto JSON (u objeto literal) con el listado de tareas y su estado. Nuestra misión es pintar todas las tareas en pantalla, de forma que las tareas ya realizadas aparezcan tachadas.


### 1. Vamos a por una tarea

El código para pintar la primera tarea en pantalla ya está creado. Entendedlo y jugad con él. Ahora vamos a modificarlo para que, dado que es una tarea completada, el texto debe aparecer tachado. Notad que se ha creado una conveniente clase CSS `.strike` que aplica este efecto.


### 2. Listado de tareas

¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que hemos recibido del servidor, cada una de las tareas completadas  debe aparecer tachada.


### 3. Vamos a darle dinamismo
Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un `input` de tipo `checkbox` al final de cada tarea que nos falte por completar. Cuando el usuario marque la tarea como completada con el checkbox, deben suceder varias cosas:
- la tarea debe mostrarse como completada (tachada)
- debemos modificar su estado (propiedad `completed`) en el array `tasks`

#### ¡Conseguido!

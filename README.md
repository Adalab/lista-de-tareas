## Mi lista de tareas

Seguimos con el repaso de JavaScript. ¡A darle caña!

### 0. Preparando el entorno

Para empezar vamos a aprender cómo usar realizar los ejercicios en vuestro equipo local. Para ello debes clonar (hacer una copia) de este repositorio en tu equipo desde el terminal de comandos. Abre el terminal y muévete (usando `cd`, si no lo conoces [mira esta documentación][1] a la localización de tu ordenador donde quieras crear el proyecto. A continuación, ejecuta este comando:

```git clone https://github.com/Adalab/lista-de-tareas.git```

¡Ya tienes todo el código en tu equipo! Ahora ábrelo en tu editor favorito (en clase usamos normalmente [Sublime Text 3][2], en tu navegador y estamos listos para empezar a trabajar.

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos pedido los datos de tareas a un servidor y nos ha devuelto la información un objeto JSON (o diccionario) con el listado de tareas y su estado. Nuestra misión es pintar todas las tareas en pantalla, de forma que las tareas ya realizadas aparezcan tachadas.


### 1. Vamos a por una tarea

El código para pintar la primera tarea en pantalla ya está creado. Entendedlo y jugad con él. Ahora vamos a modificarlo para que, dado que es una tarea completada, el texto debe aparecer tachado. Notad que se ha creado una conveniente clase CSS `.tachado` que aplica este efecto.

#### ¡Conseguido!

Cuando tengamos todo funcionando, vamos a guardar el resultado en nuestro repositorio de control de versiones con git. Para ello tenemos que ejecutar los siguientes comandos en orden:

```git add listado-de-ficheros-modificados```, siendo el listado de ficheros modificados por ejemplo `index.js` si sólo hemos modificado el JS, o `index.html index.js` si hemos modificado estos dos ficheros (nombres separados por un espacio)

```git commit -m mensaje-descriptivo-del-commit```, siendo el mensaje algo que diga qué cambios hemos hecho en el código (qué hemos añadido o quitado). Por ejemplo podríamos poner "Añadida la funcionalidad que pinta en la pizarra 100 veces un mensaje". ¡Con esto ya tenemos esta funcionalidad para siempre en nuestro control de versiones!

```git push origin master``` para publicar los cambios en el repositorio de Adalab en GitHub. De esta forma el resto de adalabers tendrán acceso al código que has subido. 

#### ¿Cómo alguien se descarga tus cambios?

Para que las demás puedan descargar la última versión del código tienen que seguir estos pasos:

1. Abir el terminal

2. Moverte a la carpeta donde está el proyecto (si aún no lo tienes, descárgalo usando `git clone` del ejercicio anterior)

3. Ejecuta `git pull` para descargar los datos de la última versión del código en el repositorio. ¡Ya tienes todo listo para seguir!


### 2. Listado de tareas

¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que hemos recibido del servidor, cada una de las tareas completadas  debe aparecer tachada.

#### ¡Conseguido!

Sigue los pasos de git del ejercicio anterior para subir el código al repostorio en GitHub, y que el resto se lo descarguen.

### 3. Vamos a darle dinamismo
Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un `input` de tipo `checkbox` al final de cada tarea que nos falte por completar. Cuando el usuario marque la tarea como completada con el checkbox, deben suceder varias cosas:
- la tarea debe mostrarse como completada (tachada)
- debemos modificar su estado (propiedad `completada`) en el array `tareas`

¡A por ello!

#### ¡Conseguido!

Sigue los pasos de git del ejercicio anterior para subir el código al repostorio en GitHub, y que el resto se lo descarguen.

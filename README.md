#  Proyecto Final React 👌

###Contenido
En este repositorio se encuentra el proyecto final de React.js de Coderhouse, el cual consiste en la creacion de un e-commerce, para tal fin se tomo como idea una tienda de venta de articulos para Buceo.

En el inicio nos encontramos con un listado completo de todos los productos. Los cuales estan previamentes cargados en un ***base de datos.***

Cada Articulo se visuliza en un *Cart* que es un componente que creamos, el cual contiene los datos de cada articulo. 

El usuario puede optar por una busqueda mas especifica a travez de las categorias:

+ Visores 🤿
+ Aletas 
+ Ordenadores ⌚️

---
###Funcionamiento
El e-commerce funciona de la siguente manera:
El usuario selecciona el articulo que desea comprar y hace click sobre el *Boton* Comprar, lo cual nos dirige a una pantalla donde podemos ver el articulo que seleccionamos más un componente el cual nos permite aumentar o disminuir las cantidades que deseamos compara, una vez que definimos la cantidad podemos agregar el articulo al ***Carrito***.
Cuando agregamos al carrito un articulo tenemos la posibilidad de *Ver el carrito* o seguir comparando.

En ***El carrito 🛒*** podemos ver en detalle todos los articulos que fuimos seleccionando mas el precio final en caso de haber adquirido más de una unidad.

El ultimo paso es realizar la Orden de compra, para la cual debemos completar los datos solicitados, **Nombre, eMail y Telefono**

Al final la orden se muestra un mensaje y los datos del carrito y del usuario se guardan en la base de datos.

---
##Librerias 

Para la realizacion de este proyecto se utilizaron las siguientes librerias.

  ####  Firestone 
Utilizamos para la base de datos **Firestone** en la cual almacenamos todos los articulos que vamos a comercializar y ademas vamos guardando cada *Orden* que va generando el usuario.

#### SweetAlert2
Utilizamos la libreria de notificaciones SweetAlert2 al momento de finalizar la orden de esta manera el usuario ve el mensaje de que su orden fue tomada.


#### React Router
Con esta libreria podemos implementar el enrrutamiento para que el usuario pueda navegar por la pagina.



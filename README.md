# Frontend Demo!

Aplicación web de demostración , utilizando elementos básicos de angular 10 y NGRX. La app consiste en poder desplegar una tabla
con una lista de productos traidos desde un endpoint de una api generada en node (ver Repositorio de backend)

## Estructura escalable y mantenible

La idea fue generar un componente aparte para esta tabla de productos , para separarlo del AppComponent , pensando en que más adelante
podrian agregarse nuevos componentes. Se genera un servicio de productos encargado de hacer el llamado a la API , este es procesado
por Redux , para cambiar el state de la aplicación. (Personalmente pienso que el patron redux esta sobredimensionado para una demo tan simple)
Se crean 2 actions principales : Set y Unset la lista de productos. también se abstrae el reducer de los productos para anidarlo en uno de la app
general , en caso que despues se requieran agregar más reducers.

## Diseño con Bootstrap 4.1.1
Instalado por npm y haciendo referencia al css en el angular.json

## Muchas gracias
# Cristobal Burgos


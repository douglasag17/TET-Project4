# TET-Project4
Materia: Topicos Especiales en Telemática

- Douglas Ardila Garcés dardila5@eafit.edu.co
- Andrés Felipe Avendaño aavenda1@eafit.edu.co 
- Felipe Macías Herrera fmacias1@eafit.edu.co 

## Descripción

Aplicación Web Escalable en la nube de AWS con atributos de calidad como: Disponibilidad, Rendimiento y Seguridad.

## Mongo Atlas

- Crear una cuenta en [MongoDB Atlas](https://www.mongodb.com/)
![Screenshot](imagenes/mongo1.png)
- Crear un nuevo cluster MongoDB Atlas con una nueva base de datos
- Para conectar AWS con el cluster MongoDB Atlas seguir el siguiente tutorial https://youtu.be/BfLZUGjwyAs 
- Conectar la App Web con el cluster creado
![Screenshot](imagenes/mongo2.png)
![Screenshot](imagenes/mongo3.png)

## Obtener dominio

- Crear una cuenta en [Freenom](https://my.freenom.com/)
![Screenshot](imagenes/freenom1.png)
- Ir a services --> Register a New Domain
![Screenshot](imagenes/freenom2.png)
- Ingresar un nombre de dominio y verificar que esté disponible
- Seleccionar una extensión disponible
![Screenshot](imagenes/freenom3.png)
- Ingresar el DNS del balanceador de carga 
![Screenshot](imagenes/freenom4.png)

## Route 53
- En la consola de AWS ir a Route 53
- Crear una zona hospedada
- Ingresar el nombre del dominio
![Screenshot](imagenes/route1.png)
- Crear un conjunto de registros
![Screenshot](imagenes/route2.png)
- Seleccionar "Si" en Alias
![Screenshot](imagenes/route3.png)
- Elegir el DNS del balanceador de carga
- Copiar los 4 nameservers
![Screenshot](imagenes/route4.png)
- Poner los nameservers en los ajustes del dominio creado en freenom
![Screenshot](imagenes/freenom5.png)

## Balanceador de carga


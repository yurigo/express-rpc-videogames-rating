# VIDEOGAMES

## Introducción

Servicio web en node + express que obtiene datos de una base de datos en mysql

## Dependencias

### express

- https://www.npmjs.com/package/express

### mysql2 (mysql)

- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/mysql

### .env(dotenv)

- https://www.npmjs.com/package/dotenv

## .gitignore

- http://gitignore.io
  `.env` se excluye del repositorio y no está versionado. No obstante se suele dejar un `.env.sample` para conocer las variables de entorno.

## Enpoints

### USERS

#### ✔ `GET /api/users/all`

Obtiene todos los usuarios de la base de datos.

> #### ✔ `GET api/callback/all`
>
> Ejemplo de una llamada a mysql2 con callbacks

> #### ✔ `GET api/promise/all`
>
> Ejemplo de una llamada a mysql2 con promesas

> #### ✔ `GET api/async/await/all`
>
> Ejemplo de una llamada a mysql2 con promesas vía async/await (la que se está utilizando en `/api/users/all`)

#### ✔ `GET /api/users/get/ID`

Obtiene un usuario con id = ID.

#### ✔ `GET /api/users/del/ID`

Borra un usuario a la base de datos

#### ✔ `GET /api/users/add/LOGIN/NOMBRE`

Añade un usuario a la base de datos

### VIDEOGAMES

#### ✔ `GET /api/videogames/load`

Utility para cargar en base de datos los videojuegos que se encuentran en mock.js

#### ✔ `GET /api/videogames/all`

Obtiene todos los videojuegos de la base de datos.

#### ✔ `GET /api/videogames/get/ID`

Obtiene un videojuego con id = ID

#### ✔ `GET /api/videogames/add/NOMBRE`

Añade un videojuego a la base de datos

#### ✔ `GET /api/videogames/del/ID`

Borra un videojuego a la base de datos

### SCORE

#### ✔`GET /api/scores/puntua/ID_USER/ID_VIDEOJUEGO/PUNTUACION`

El usuario ID_USER puntua el ID_VIDEOJUEGO con la puntuación PUNTUACIÓN

### OTROS

#### ✔ Fallback para retornar un error si el endpoint no existe.

Si un endpoint no existe debemos mostrar algún tipo de error.

#### ❌Modificar el objeto que devuelven los endpoints

##### ❌Usuario

```
{
    id: 4,
    login: alice,
    name: "Alice",
    videogames: [
        { id: 1, name: "The Legend of Zelda: Ocarina of Time", score: 5},
        { id: 4, name: "Super Mario Galaxy", score: 5},
        { id: 6, name: "Red Dead Redemption 2", score: 5},
    ]
}
```

##### ❌Videogames

```
{
    id: 1,
    name: "The Legend of Zelda: Ocarina of Time",
    score: 4,
    votes: 3,
    users: [
        { id: 1, name: "Alice", score: 5},
        { id: 4, name: "Dave", score: 3},
    ]
}
```

##### ❌Paginación

Habilitar la forma de poder paginar los resultados

##### ❌Ordenación

Habilitar la forma de poder ordenar los resultados

##### ❌Filtros

Habilitar la forma de poder filtrar los resultados

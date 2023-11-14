# HangmanGame-React
The famous hangman game created using JavaScript, HTML, CSS, ReactJS, Node.js, and MySQL.

# IMPORTANT
1) You need to create a database in MySQL using the following code:

CREATE TABLE Usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NombreUsuario VARCHAR(255) NOT NULL
);

CREATE TABLE TiemposJuego (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    TiempoCompletado INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

2) Create a 'db.js' file in the backend directory and add the following code.

import { createPool } from "mysql2/promise";

export const conn = createPool({
    host: 'localhost',
    user: 'your database usename',
    password: 'your database password',
    port: your db port,
    database: 'your database name'
})

"Run Node.js in your terminal to start the server, and then run 'npm run dev' to launch the client."




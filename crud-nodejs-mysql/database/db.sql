-- creating database
CREATE DATABASE crudnodejsmysql;

-- using the database
use crudnodejsmysql;

-- creating a table
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(50) NOT NULL,
    numero_id VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    fecha_nacimiento VARCHAR(50) NOT NULL,
    fecha_creacion VARCHAR (50) NOT NULL
);

-- To show all tables
SHOW TABLE;

-- To describe the table
describe customer;

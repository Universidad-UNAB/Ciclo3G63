-- Create data base model_security

CREATE DATABASE model_security;

USE model_security; 

-- Create entity personas
CREATE TABLE personas(
	id INT PRIMARY KEY AUTO_INCREMENT,
	tipo_documento VARCHAR(30) NOT NULL,
	documento VARCHAR(12) NOT NULL,
	primer_nombre VARCHAR(20) NOT NULL,
	segundo_nombre VARCHAR(20) NULL,
	primer_apellido VARCHAR(20) NOT NULL,
	segundo_apellido VARCHAR(20) NULL,
	correo VARCHAR(50) NOT NULL,
	telefono VARCHAR(20) NOT NULL,
	estado BOOLEAN NOT NULL DEFAULT 1
);
-- Create entity roles
CREATE TABLE roles(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR (50) NOT NULL,
	estado BOOLEAN NOT NULL DEFAULT 1
);

-- Create entity usuarios

CREATE TABLE usuarios(
	id INT PRIMARY KEY AUTO_INCREMENT,
	user_name VARCHAR (20) NOT NULL UNIQUE,
	password_name VARCHAR (50) NOT NULL,
	estado BOOLEAN NOT NULL DEFAULT 1,
	persona_id INT NOT NULL,
	rol_id INT NOT NULL,
    CONSTRAINT fk_persona_id_usuarios_personas FOREIGN KEY (persona_id) REFERENCES personas(id),	
	CONSTRAINT fk_rol_id_usuarios_roles FOREIGN KEY (rol_id) REFERENCES roles (id)
);

-- Create entity vistas
CREATE TABLE vistas(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (50) NOT NULL,
    ruta VARCHAR (70) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT 1
);

-- Create entity vista_roles
CREATE TABLE vistas_roles(
	vista_id INT,
    rol_id INT,
	CONSTRAINT fk_vista_id_vistas_roles_vistas FOREIGN KEY (vista_id) REFERENCES vistas(id),
    CONSTRAINT fk_rol_id_vistas_roles_roles FOREIGN KEY (rol_id) REFERENCES roles(id) 
);
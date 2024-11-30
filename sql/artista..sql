
CREATE TABLE campana_artista (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    titulo VARCHAR(255) UNIQUE NOT NULL,  
    subtitulo VARCHAR(255) NOT NULL,  
    descripcion TEXT NOT NULL,  
    beneficios TEXT,  
    link VARCHAR(255) NOT NULL,  
    imagenUno VARCHAR(255),  
    imagenDos VARCHAR(255),  
    icono VARCHAR(255)  
);

CREATE TABLE evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE NOT NULL,
    descripcion TEXT NOT NULL,
    ubicacion VARCHAR(255) NOT NULL,
    link VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NOT NULL
);

CREATE TABLE club (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE NOT NULL,
    descripcion TEXT NOT NULL,
    icono VARCHAR(255) NOT NULL,
    membresia ENUM('Gold', 'Básica') NOT NULL
);


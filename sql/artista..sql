
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

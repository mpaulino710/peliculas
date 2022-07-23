export interface PeliculaCreacionDTO {
    titulo: string;
    resumen: string;
    enCine: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: File;
}

export interface PeliculaDTO {
    titulo: string;
    resumen: string;
    enCine: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster: string;
}
export interface tipoServicioCreacionDTO {
    nombre: string;
    descripcion: string;
    poster: string;
    estado: boolean;
    mostrarEnElMenuPrincipal: boolean;
}

export interface tipoServicioDTO {
    id:number;
    nombre: string;
    descripcion: string;
    poster: File;
    estado: boolean;
    mostrarEnElMenuPrincipal: boolean;
}

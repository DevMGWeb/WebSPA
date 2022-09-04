export interface LandingPageDTO {
    tiposServicios: TipoServicioLandingPageDTO[];
}

export interface TipoServicioLandingPageDTO {
    id: number;
    nombre: string;
    servicios: ServicioLandingPageDTO[];
}

export interface ServicioLandingPageDTO {
    id: number;
    nombre: string;
    valor: number;
    descripcion: string;
    tipoServicioId: number;
    foto: string;
}
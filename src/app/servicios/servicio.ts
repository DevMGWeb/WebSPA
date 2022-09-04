import { tipoServicioDTO } from "../tipo-servicio/tipo-servicio";

export interface servicioCreacionDTO {
    nombre: string;
    valor: number;
    descripcion: string;
    estado: boolean;
    tipoServicioId: number;
    foto: string;
}

export interface servicioDTO {
    id: number;
    nombre: string;
    valor: number;
    descripcion: string;
    estado: boolean;
    tipoServicioId: number;
    tipoServicio: tipoServicioDTO;
    foto: File;
}

export interface servicioPaqueteDTO {
    id: number;
    nombre: string;
}
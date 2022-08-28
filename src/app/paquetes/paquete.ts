import { servicioDTO } from "../servicios/servicio";
import { sucursalPaqueteDTO } from "../sucursales/sucursal";

export interface paqueteCreacionDTO {
    nombre: string;
    estado: boolean;
    serviciosIds: number[];
    sucursales: sucursalPaqueteDTO[];
}

export interface paqueteDTO {
    id: number;
    nombre: string;
    estado: boolean;
    servicios: servicioDTO[];
    sucursales: sucursalPaqueteDTO[];
}


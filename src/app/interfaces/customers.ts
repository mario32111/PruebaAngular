export interface CustomerResult {
  Clientes: Cliente[];
}

interface Cliente {
  nombre: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  pais: string;
}

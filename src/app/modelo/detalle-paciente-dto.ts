export class DetallePacienteDTO {
    codigo: number = 0;
    cedula: String = "";
    nombre: String = "";
    telefono: String = "";
    urlFoto: String = "";
    ciudad: any;
    fechaNacimiento: Date = new Date(2023 - 12 - 3);
    alergias: String = "";
    eps: any;
    tipoSangre: any;
    correo: String = "";
}

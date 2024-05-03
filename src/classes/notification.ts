export class Notificacion {
  constructor(
    readonly id: number,
    public contenido: string,
    public autor: number,
    public receptor: number
  ) {
    this.id = id;
    this.contenido = contenido;
    this.autor = autor;
    this.receptor = receptor;
  }
}

import { Notificacion } from "../types/types";

export class User {
  constructor(
    readonly id: number,
    public username: string,
    public casilla: Notificacion[] = []
  ) {
    this.id = id;
    this.username = username;
    this.casilla = casilla;
  }

  public getCasilla() {
    return this.casilla;
  }

  public addNotificacion(notificacion: Notificacion) {
    this.casilla.push(notificacion);
  }
}

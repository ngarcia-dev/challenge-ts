import { User } from "./classes/user";
import { Notificacion } from "./classes/notification";

const jose = new User(1, "jose");
const juan = new User(2, "juan");

// Se crea una notificacion para juan.
const firstNoti = new Notificacion(
  1,
  `se etiqueto a ${juan.username.toUpperCase()} en esta publicación`,
  jose.id,
  juan.id
);
// se envia la notificacion.
juan.sendNotification(firstNoti);
// se imprime la casilla de juan.
console.log(juan.casilla);
// se lee la notificacion.
/**code */